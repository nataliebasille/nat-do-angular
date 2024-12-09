import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideTrpc } from 'ngx-trpc';
import superjson from 'superjson';

import { routes } from './app.routes';
import { TRPC } from './trpc/trpc.injection';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(
      withEventReplay(),
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideHttpClient(withFetch()),
    provideTrpc(TRPC, {
      http: {
        url: 'http://localhost:4200/trpc',
        transformer: superjson,
      },
    }),
  ],
};
