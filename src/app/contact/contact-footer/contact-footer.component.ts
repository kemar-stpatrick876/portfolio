import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.scss'],
})
export class ContactFooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToContactMe(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.router.navigateByUrl('contact');
    }, 10);
  }
}
