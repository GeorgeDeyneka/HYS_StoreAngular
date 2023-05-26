import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent {
  @Input() ngClassObject: { [key: string]: boolean };
  @Input() size: string = '24';
  @Input() fill: string = 'none';
  @Input() path: string;
  @Input() stroke: string;
  @Input() hoverFill: string;
  @Input() hoverStroke: string;

  protected baseHref = 'assets/sprite.svg#';
}
