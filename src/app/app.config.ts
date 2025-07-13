import { ApplicationConfig } from '@angular/core';
import { appRouter } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [appRouter, provideHttpClient()], //Nur das – kein zweites provideRouter!
};
