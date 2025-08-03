import { Injectable } from '@angular/core';

/**
 * Service for temporarily caching the contact form data in memory.
 */
@Injectable({
  providedIn: 'root',
})
export class ContactFormCacheService {
  private cachedForm: any = null;

  /**
   * Stores form data in memory.
   * @param data The form data to cache.
   */
  setForm(data: any) {
    this.cachedForm = data;
  }

  /**
   * Retrieves the cached form data.
   * @returns The cached form data or null.
   */
  getForm(): any {
    return this.cachedForm;
  }

  /**
   * Clears the cached form data.
   */
  clearForm() {
    this.cachedForm = null;
  }
}
