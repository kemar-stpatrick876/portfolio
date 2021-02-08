import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'portfolio-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label = '';
  @Input() type: 'primary' | 'primary-icon' | 'secondary' = 'primary';
  @Input() disabled: boolean | undefined = false;
  @Output() onclick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
