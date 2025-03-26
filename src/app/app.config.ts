import { ApplicationConfig } from '@angular/core';
import { appRouter } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [appRouter], //Nur das – kein zweites provideRouter!
};
