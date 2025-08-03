import {
  Routes,
  provideRouter,
  withRouterConfig,
  ExtraOptions,
} from '@angular/router';
import { MainComponent } from './sections/main/main.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

/**
 * Application route configuration.
 * Defines routes for main page, legal notice, and privacy policy.
 */
export const routes: Routes = [
  /**
   * Default route for the homepage.
   */
  { path: '', component: MainComponent, pathMatch: 'full' },
  /**
   * Route for the legal notice (Impressum) page.
   */
  { path: 'legal-notice', component: LegalNoticeComponent },
  /**
   * Route for the privacy policy (Datenschutzerklärung) page.
   */
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  /**
   * Fallback route: redirects unknown paths to homepage.
   */
  { path: '**', redirectTo: '' },
];

/**
 * Provides the router with the defined route configuration.
 */
export const appRouter = provideRouter(routes);
