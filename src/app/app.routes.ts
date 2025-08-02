import {
  Routes,
  provideRouter,
  withRouterConfig,
  ExtraOptions,
} from '@angular/router';
import { MainComponent } from './sections/main/main.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' },
];

export const appRouter = provideRouter(routes);

// const scrollOptions: ExtraOptions = {
//   anchorScrolling: 'enabled',  angular scrollt automatisch zu fragment
//   scrollPositionRestoration: 'enabled', Scrollt nach Navigation an den Anfang (oder zurück zum alten Punkt)
//   onSameUrlNavigation: 'reload', Auch bei Klick auf denselben Link wird Navigation/Scrollen ausgelöst
// };

// export const appRouter = provideRouter(routes, withRouterConfig(scrollOptions));
