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
      "Typescript" ,
      "EcmaScript" ,
      "React" ,
      "VueJs" ,
      "developer" ,
    ],
  },
  {
    question:
        "UpFront devlopers are the best in...",
    answers: [
      "Javascript" ,
      "React" ,
      "NodeJS" ,
      "VueJs" ,
      "eating food" ,
    ],
  },
  {
    question:
        "The cities we visited during our conference trips are...",
    answers: [
      "Singapore" ,
      "London" ,
      "Las Vegas" ,
      "Utrecht" ,
      "Paris" ,
    ],
  },
  {
    question:
        "What is the most favourite food of the UpFronters",
    answers: [
      "Thai" ,
      "Greek" ,
      "Singapore" ,
      "Turkish" ,
      "Fast food" ,
    ],
  },
  {
    question:
        "What are the top clients within Upfront",
    answers: [
      "Rabobank" ,
      "NPO" ,
      "Fontem" ,
      "Jumbo" ,
      "Quin" ,
    ],
  },
];
