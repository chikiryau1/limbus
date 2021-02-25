import type { Route, ServerInstance } from 'types/server';

type ServerUtils = { registerRoutes: (routes: Route[]) => void };

export const serverUtils = (serverInstance: ServerInstance): ServerUtils => ({
  registerRoutes: (routes) => {
    routes.forEach((route) => {
      serverInstance.route(route);
    });
  },
});
