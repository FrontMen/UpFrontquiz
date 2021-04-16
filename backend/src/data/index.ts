import { v4 } from "uuid";
import { User, Quiz } from "../types";
import { emitter } from "../pubsub";
import { questions } from "./questions";

let quiz: Quiz = {
  id: v4(),
  active: false,
  currentQuestion: null,
  questions: questions.map((x) => ({
    question: x.question,
  })),
};

let users: User[] = [];
let quizInterval: ReturnType<typeof setInterval>;

export const publishUsers = () => {
  users.forEach(async (user) => {
    emitter.emit({
      topic: `${user.id}_USER_CHANGE`,
      payload: {
        users: await getUsersState(user.id),
      },
    });
  });
};

export const publishQuiz = async () => {
  emitter.emit({
    topic: `QUIZ_CHANGE`,
    payload: {
      quiz: await getQuiz().catch(() => null),
    },
  });
};

const quizIntervalFn = () => {
  if (!quiz.active) return;

  users.forEach((user) => {
    if (user.active) {
      user.timeLeft = user.timeLeft - 1;
    }
  });
  console.log("publish", users);
  publishUsers();
};

export async function getQuiz() {
  return quiz;
}

export function answerQuestion(userId: string) {
  if (!quiz.active || users.length !== 2) {
    throw Error("Quiz not active");
  }

  console.log("answer", userId);

  if (users[0].active) {
    users[0].active = false;
    users[1].active = true;
  } else {
    users[0].active = true;
    users[1].active = false;

    if (quiz.questions.length > quiz.currentQuestion + 1) {
      quiz.currentQuestion = quiz.currentQuestion + 1;
    }
  }
  publishUsers();
  publishQuiz();
}

export async function userJoin(id: string, name: string) {
  if (users.length < 2) {
    const user: User = {
      id,
      name,
      active: false,
      timeLeft: 320,
    };
    users.push(user);
    publishUsers();
    if (users.length === 2) {
      startQuiz();
    }
    return user;
  }
  reset();
  throw Error("There are already 2 users in the game");
}

export async function getUsers() {
  return users;
}

export async function reset() {
  users = [];
  publishUsers();
  quiz.active = false;
  quiz.currentQuestion = null;
  publishQuiz();
  if (quizInterval) clearInterval(quizInterval);
  return true;
}

export async function getUsersState(userId: string) {
  const player1 = users.find((x) => x.id === userId);
  const player2 = users.find((x) => x.id !== userId) || null;
  if (!player1) {
    console.error("Could not find own player");
    return null;
  }
  return {
    player1,
    player2,
  };
}

export async function startQuiz() {
  if (quiz.active) {
    throw Error("Quiz already started");
  }
  if (users.length !== 2) {
    throw Error("Need 2 users to start the quiz");
  }

  quiz.active = true;
  quiz.currentQuestion = 0;
  users[0].active = true;
  setInterval(quizIntervalFn, 1000);

  emitter.emit({
    topic: "QUIZ_CHANGE",
    payload: {
      quiz,
    },
  });
  console.log(quiz);
  return true;
}

export async function getQuestion() {
  if (!quiz.active) {
    throw Error("No active quiz");
  }
  if (!questions[quiz.currentQuestion]) {
    throw Error("Invalid question ID");
  }
  const question = questions[quiz.currentQuestion];
  return {
    quizId: quiz.id,
    question: question.question,
  };
}

export async function getQuestions() {
  return questions.map((x) => ({
    question: x.question,
  }));
}
