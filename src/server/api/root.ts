import { createTRPCRouter, publicProcedure } from './trpc';

export const appRouter = createTRPCRouter({
  users: publicProcedure.query(async () => {
    return { userList: ['user1', 'user2'] };
  }),
});

export type AppRouter = typeof appRouter;
