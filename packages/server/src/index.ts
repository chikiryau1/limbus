import fastify from 'fastify';
import cors from 'fastify-cors';
import type { ServerInstance } from 'types/server';

import { routes } from './routes';
import { serverUtils } from './helpers/server';

// import { service } from './services';

const server: ServerInstance = fastify({
  logger: true,
});

const { registerRoutes } = serverUtils(server);

const start: () => void = async () => {
  try {
    registerRoutes(routes);
    // @ts-ignore
    await server.register(cors);
    await server.listen(3001, '0.0.0.0');
    // await service.start();
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
};

start();
