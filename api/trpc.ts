// api/trpc.ts
import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../src/server/api/root';

export default trpcNext.createNextApiHandler({ router: appRouter });
