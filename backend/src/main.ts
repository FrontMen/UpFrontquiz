import { join } from "path";
import { readFileSync } from "fs";
import mercurius, { IResolvers } from "mercurius";
import Fastify from "fastify";
import fastifyCors from "fastify-cors";
import { emitter } from "./pubsub";
import { resolvers } from "./resolvers";

const typeDefs = readFileSync(join(__dirname, "./schema.graphql"), "utf8");

const app = Fastify();

app.register(fastifyCors, { origin: true });

app.register(mercurius, {
  schema: typeDefs,
  resolvers: resolvers as IResolvers,
  subscription: {
    emitter,
  },
  graphiql: "playground",
});

app.get("/", async function (_req, reply) {
  return reply.send(
    "The path you're looking for is in another castle. (/graphql)"
  );
});

(async function () {
  await app.listen(8080, "0.0.0.0");
  console.log("Graphql server running on http://127.0.0.1:8080/graphql");
})();
