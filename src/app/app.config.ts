import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
export const BASE_URL = new InjectionToken<string>('BASE_URL')
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()),
    {
      provide:BASE_URL,
     // useValue:`http://192.168.208.89/api/WorkFlowDocuments/ProductionSummery_AllSection?divisionId=5&effectMonth=2024-09`
     useValue: `json/data.json`
    }, 
    provideClientHydration()]
};
