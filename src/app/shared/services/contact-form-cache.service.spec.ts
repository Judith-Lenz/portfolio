import { TestBed } from '@angular/core/testing';

import { ContactFormCacheService } from './contact-form-cache.service';

describe('ContactFormCacheService', () => {
  let service: ContactFormCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
