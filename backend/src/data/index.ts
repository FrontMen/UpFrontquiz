import { v4 } from "uuid";
import { User, Quiz, Question } from "../types";
import { pubsub } from "../pubsub";
import { questions } from "./questions";

let quiz: Quiz = { id: v4(), active: false };
let users: User[] = [];

export async function userJoin(id: string, name: string) {
  if (users.length < 2) {
    const user: User = {
      id,
      name,
      active: false,
      timeLeft: 320,
    };
    users.push(user);
    pubsub.publish({
      topic: "USER_CHANGE",
      payload: {
        users,
      },
    });
    return user;
  }
  throw Error("There are already 2 users in the game");
}

export async function getUsers() {
  return users;
}

export async function reset() {
  users = [];
  pubsub.publish({
    topic: "USER_CHANGE",
    payload: {
      users,
    },
  });

  quiz = { id: v4(), active: false };

  return true;
}

export async function startQuiz() {
  if (quiz.active) {
    throw Error("Quiz already started");
  }
  quiz.active = true;
  quiz.currentQuestion = 0;
  pubsub.publish({
    topic: "QUIZ_CHANGE",
    payload: {
      quiz,
    },
  });
  pubsub.publish({
    topic: "QUESTION_CHANGE",
    payload: {
      question: await getQuestion(),
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
    return null;
  }
  const question = questions[quiz.currentQuestion];
  return {
    quizId: quiz.id,
    question: question.question,
  };
}
