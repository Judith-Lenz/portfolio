import { TestBed } from '@angular/core/testing';

import { ScrollTrackingService } from './scroll-tracking.service';

describe('ScrollTrackingService', () => {
  let service: ScrollTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
