import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

export const TABLET_BREAKPOINT = 768;
export const SMALL_DESKTOP_BREAKPOINT = 992;

export const BREAKPOINTS = {
  mobile: `(max-width: ${TABLET_BREAKPOINT - 1}px)`,
  tablet: `(min-width: ${TABLET_BREAKPOINT}px) and (max-width: (${
    SMALL_DESKTOP_BREAKPOINT - 1
  }px)`,
  desktop: `(min-width: ${SMALL_DESKTOP_BREAKPOINT}px`,
};

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  public get isMobileScreen(): boolean {
    return this.breakpointObserver.isMatched(BREAKPOINTS.mobile);
  }

  public get isTabletScreen(): boolean {
    return this.breakpointObserver.isMatched(BREAKPOINTS.tablet);
  }

  public get isDesktopScreen(): boolean {
    return this.breakpointObserver.isMatched(BREAKPOINTS.desktop);
  }

  public watchForBreakpointChanges(): Observable<BreakpointState> {
    return this.breakpointObserver.observe([
      BREAKPOINTS.mobile,
      BREAKPOINTS.tablet,
      BREAKPOINTS.desktop,
    ]);
  }
}
