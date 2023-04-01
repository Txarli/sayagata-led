import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});
await fastify.register(cors, {
  origin: '*',
});

fastify.post("/led-strip", function (_request, reply) {
  console.log("Recibida llamada de leds 🎉");
  reply.send(200);
});

fastify.listen({ port: 10000 }, function (err, _address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
