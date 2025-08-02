import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollTrackingService {
  private sectionSubject = new BehaviorSubject<string>('');
  activeSection$ = this.sectionSubject.asObservable();

  private trackingPaused = false;

  pauseTracking(duration = 800): void {
    this.trackingPaused = true;
    setTimeout(() => {
      this.trackingPaused = false;
    }, duration);
  }

  isTrackingPaused(): boolean {
    return this.trackingPaused;
  }

  setActiveSection(section: string): void {
    this.sectionSubject.next(section);
  }
}
