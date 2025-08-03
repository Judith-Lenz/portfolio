import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service for tracking the currently active scroll section on the page.
 */
@Injectable({
  providedIn: 'root',
})
export class ScrollTrackingService {
  /**
   * Observable for the currently active section.
   */
  private sectionSubject = new BehaviorSubject<string>('');
  activeSection$ = this.sectionSubject.asObservable();
  private trackingPaused = false;

  /**
   * Temporarily pauses scroll tracking to prevent unwanted updates.
   * @param duration Time in milliseconds to pause tracking (default: 800ms).
   */
  pauseTracking(duration = 800): void {
    this.trackingPaused = true;
    setTimeout(() => {
      this.trackingPaused = false;
    }, duration);
  }

  /**
   * Checks if scroll tracking is currently paused.
   * @returns True if tracking is paused, otherwise false.
   */
  isTrackingPaused(): boolean {
    return this.trackingPaused;
  }

  /**
   * Sets the currently active section.
   * @param section The ID of the active section.
   */
  setActiveSection(section: string): void {
    this.sectionSubject.next(section);
  }
}
