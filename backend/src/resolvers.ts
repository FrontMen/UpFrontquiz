import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    questions: () => null,
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
