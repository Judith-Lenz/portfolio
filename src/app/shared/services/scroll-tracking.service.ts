import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollTrackingService {
  private sectionSubject = new BehaviorSubject<string>('');
  activeSection$ = this.sectionSubject.asObservable();

  setActiveSection(section: string): void {
    this.sectionSubject.next(section);
  }
}
