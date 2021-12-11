import type { Response } from "@next-fastify-turborepo/schemas";
import { responseSchema } from "@next-fastify-turborepo/schemas";
import type { FastifyPluginAsync } from "fastify";
import Fastify from "fastify";
import fastifyCors from "fastify-cors";

const fastify = Fastify({
  connectionTimeout: 3000,
  logger: { level: "info" },
});

const pingController: FastifyPluginAsync = async (fastify) => {
  fastify.get<{
    Reply: Response;
  }>(
    "/",
    { schema: { response: { 200: responseSchema } } },
    async (_, reply) => {
      reply.status(200).send({ message: "pong" });
    }
  );
};

const setUp = async () => {
  fastify.register(fastifyCors, { origin: "*" });
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
