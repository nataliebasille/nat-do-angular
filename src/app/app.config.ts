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
import { environment } from '../environments/environment';

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
        url: environment.apiUrl,
        transformer: superjson,
      },
    }),
  ],
};
