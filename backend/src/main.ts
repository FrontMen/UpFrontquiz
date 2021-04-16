import { join } from "path";
import { readFileSync } from "fs";
import mercurius from "mercurius";
import Fastify from "fastify";
import fastifyCors from "fastify-cors";

const { pubsub } = require("./pubsub");
const { resolvers } = require("./resolvers");
const typeDefs = readFileSync(join(__dirname, "./schema.graphql"), "utf8");

const app = Fastify();

app.register(fastifyCors, { origin: true });

app.register(mercurius, {
  schema: typeDefs,
  resolvers,
  subscription: {
    pubsub,
  },
  graphiql: "playground",
});

app.get("/", async function (req, reply) {
  const query = "{ add(x: 2, y: 2) }";
  return reply.graphql(query);
});

(async function () {
  await app.listen(3000, "0.0.0.0");
  console.log("Graphql server running on http://127.0.0.1:3000/graphql");
})();
