declare module 'types/server' {
  import { FastifyInstance, RouteOptions } from 'fastify';
  import { IncomingMessage, Server, ServerResponse } from 'http';

  export type ServerInstance = FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
  >;

  export type Route = RouteOptions;
}
