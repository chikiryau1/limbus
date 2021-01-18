import fastify, { FastifyInstance } from 'fastify';
import { Server, ServerResponse, IncomingMessage } from 'http';
import cors from 'fastify-cors';

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({
  logger: true,
});

server.get('/ping', async (request, reply) => {
  return { response: 'pong' }
});

const start: () => void = async () => {
  try {
    // @ts-ignore
    await server.register(cors);
    await server.listen(3001, '0.0.0.0');
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
};

start();
