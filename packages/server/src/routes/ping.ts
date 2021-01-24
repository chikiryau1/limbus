import type { Route } from 'types/server';

export const pingRoute: Route = {
  method: 'GET',
  url: '/ping',
  handler: async (request, reply) => {
    await reply.send('pong')
  },
};