import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Okay';
  @Input() otherStyles: 'full-width';
  @Input() theme: 'blue' | 'aqua' | 'violet' = 'violet';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() buttonType: 'submit' | 'button' = 'button';
  @Output() clickHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
