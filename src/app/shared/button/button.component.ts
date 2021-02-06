import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'portfolio-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label = '';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Output() onclick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



  onClick(e: any): void {
    console.log('clicked ', e);
  }

}
