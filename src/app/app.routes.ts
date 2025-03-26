import {
  Routes,
  provideRouter,
  withRouterConfig,
  ExtraOptions,
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

const scrollOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollOffset: [0, 0],
};

export const appRouter = provideRouter(routes, withRouterConfig(scrollOptions));
