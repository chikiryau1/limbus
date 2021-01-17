import fastify, { FastifyInstance } from 'fastify';
import { Server, ServerResponse, IncomingMessage } from 'http';

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({
  logger: true,
});

const start: () => void = async () => {
  try {
    await server.listen(3001, '0.0.0.0');
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
};

start();
