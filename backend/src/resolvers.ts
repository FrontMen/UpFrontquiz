import { v4 } from "uuid";
import {
  getUsers,
  userJoin,
  reset,
  startQuiz,
  publishQuiz,
  publishUsers,
} from "./data";
import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    users: async () => getUsers(),
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
    answerQuestion: async (_, args) => {
      args.userId;
      return null;
    },
  },
  Subscription: {
    timer: {
      subscribe: async (_root, _args, { pubsub }) => {
        return await pubsub.subscribe("TIMER");
      },
    },
    quiz: {
      subscribe: async (_root, _args, { pubsub }) => {
        process.nextTick(async () => {
          publishQuiz();
        });
        return await pubsub.subscribe(`QUIZ_CHANGE`);
      },
    },
    users: {
      subscribe: async (_root, { userId }, { pubsub }) => {
        process.nextTick(async () => {
          publishUsers();
        });
        return await pubsub.subscribe(`${userId}_USER_CHANGE`);
      },
    },
  },
};
