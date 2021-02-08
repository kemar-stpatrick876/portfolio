import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/responsive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public responsiveSrv: ResponsiveService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public goToPortfolio(): void {
    this.router.navigateByUrl('portfolio');
  }

  public scrollToAboutMe(el: HTMLElement): void {
    el.scrollIntoView();
  }
}
