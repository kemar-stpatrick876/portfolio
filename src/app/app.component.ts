import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  public get isContactRoute(): boolean {
    return this.router.url === '/contact';
  }
}
