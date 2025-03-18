import {
  Routes,
  provideRouter,
  withInMemoryScrolling,
  withComponentInputBinding,
} from '@angular/router';
import { LandingPageComponent } from './sections/landing-page/landing-page.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' }, // Hauptseite mit allen Abschnitten
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' }, // Fallback zur Hauptseite
];

export const appRoutingProviders = [
  provideRouter(
    routes,
    withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
    }),
    withComponentInputBinding()
  ),
];
