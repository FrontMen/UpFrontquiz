// import { Question } from "../types";

export interface QuestionWithAnswers {
  question: string;
  answers: { answer: string }[];
}

export const questions: QuestionWithAnswers[] = [
  {
    question:
      "What is the first word you think of when you hear the word JavaScript",
    answers: [
      { answer: "Typescript" },
      { answer: "EcmaScript" },
      { answer: "ES6" },
      { answer: "Bla" },
      { answer: "Yes" },
    ],
  },
];
