import { HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateService,
  TranslateModule,
  TranslateStore,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { importProvidersFrom } from '@angular/core';

/**
 * Factory function for loading translation files via HTTP.
 * Loads JSON files from the assets/i18n/ directory.
 *
 * @param http Angular HttpClient instance.
 * @returns A TranslateHttpLoader instance.
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * Provides the translation module and related services.
 * Should be used in the main application bootstrap configuration.
 */
export const provideTranslation = () => [
  importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ),
  TranslateService,
  TranslateStore,
];
