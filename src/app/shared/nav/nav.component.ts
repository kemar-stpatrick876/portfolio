import { Component, OnInit, Input } from '@angular/core';

interface INavItem {
  label: string;
  path: string;
}
@Component({
  selector: 'portfolio-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() placement: 'footer' | 'header' = 'header';
  navItems: INavItem[] = [
    {
      label: 'home',
      path: '/',
    },
    {
      label: 'portfolio',
      path: '/portfolio',
    },
    {
      label: 'contact me',
      path: '/contact',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
