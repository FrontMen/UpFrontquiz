import { v4 } from "uuid";
import { userJoin } from "./data";
import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    questions: () => null,
  },
  Mutation: {
    join: async (_, args) => {
      const user = await userJoin(v4(), args.name);
      return user;
    },
  },
  Subscription: {
    timer: {
      //   resolve: async () => Date.now(),
      subscribe: async (root, args, { pubsub }) => {
        console.log(pubsub);
        return await pubsub.subscribe("TIMER");
      },
    },
  },
};
