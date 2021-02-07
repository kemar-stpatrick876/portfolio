import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public screenType = 'assets/images/homepage/mobile/image-homepage-hero.jpg';
  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.commonService
      .watchForBreakpointChanges()
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this._updateScreenPath();
        }
      });
  }

  private _updateScreenPath(): void {
    if (this.commonService.isMobileScreen) {
      this.screenType = 'mobile';
    } else if (this.commonService.isTabletScreen) {
      this.screenType = 'tablet';
    } else {
      this.screenType = 'desktop';
    }
  }

  public goToPortfolio(): void {
    this.router.navigateByUrl('portfolio');
  }

  public scrollToAboutMe(el: HTMLElement): void {
    el.scrollIntoView();
  }
}
