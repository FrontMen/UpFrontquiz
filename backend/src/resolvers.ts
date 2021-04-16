import { v4 } from "uuid";
import { getUsers, userJoin } from "./data";
import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    questions: () => null,
    users: async () => getUsers(),
  },
  Mutation: {
    join: async (_, args) => {
      const user = await userJoin(v4(), args.name);
      return user;
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
  },
};
