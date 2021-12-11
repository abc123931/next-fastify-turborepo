import Fastify from "fastify";
import type { FastifyPluginAsync } from "fastify";

const fastify = Fastify({
  connectionTimeout: 3000,
  logger: { level: "info" },
});

const pingController: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", async (_, reply) => {
    reply.status(200).send({ message: "pong" });
  });
};

const setUp = async () => {
  fastify.register(pingController, { prefix: "/ping" });
};

const start = async () => {
  try {
    await setUp();
    await fastify.listen(8080);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
