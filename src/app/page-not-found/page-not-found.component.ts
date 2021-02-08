import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const visual = document.getElementById('visual');
    const events = ['resize', 'load'];

    events.forEach((e) => {
      window.addEventListener(e, () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = 45 / (width / height);
        if (visual) {
          visual.style.transform =
            'translate(-50%, -50%) rotate(-' + ratio + 'deg)';
        }
      });
    });
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }
}
