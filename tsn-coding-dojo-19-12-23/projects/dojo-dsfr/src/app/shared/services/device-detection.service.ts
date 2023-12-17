import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class DeviceDetectionService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobile() {
    // TODO: Bonus
  }
}
