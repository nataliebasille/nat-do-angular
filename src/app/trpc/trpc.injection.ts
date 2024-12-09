import { createTrpcInjectionToken } from 'ngx-trpc';
import { type AppRouter } from '../../server/api/root';

export const TRPC = createTrpcInjectionToken<AppRouter>();
