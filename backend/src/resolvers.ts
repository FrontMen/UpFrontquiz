import { v4 } from "uuid";
import { getUsers, userJoin, reset, getQuestion, startQuiz } from "./data";
import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    users: async () => getUsers(),
    question: async () => getQuestion(),
  },
  Mutation: {
    join: async (_, args) => {
      const user = await userJoin(v4(), args.name);
      return user;
    },
    reset: async () => {
      return reset();
    },
    startQuiz: async () => {
      return startQuiz();
    },
  },
  Subscription: {
    timer: {
      resolve: async () => Math.round(Date.now() / 1000),
      subscribe: async (root, args, { pubsub }) => {
        return await pubsub.subscribe("TIMER");
      },
    },
    users: {
      resolve: async () => getUsers(),
      subscribe: async (root, args, { pubsub }) => {
        return await pubsub.subscribe("USER_CHANGE");
      },
    },
    question: {
      subscribe: async (root, args, { pubsub }) => {
        return await pubsub.subscribe("QUESTION_CHANGE");
      },
    },
  },
};
