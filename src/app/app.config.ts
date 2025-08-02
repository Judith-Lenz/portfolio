import { ApplicationConfig } from '@angular/core';
import { appRouter } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslation } from './translate.config';

export const appConfig: ApplicationConfig = {
  providers: [appRouter, provideHttpClient(), ...provideTranslation()],
};
