import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/hello', function (_request, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 10000 }, function (err, _address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
