import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/', function (_request, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, function (err, _address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
