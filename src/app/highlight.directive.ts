import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Colors } from './models/enums/colors.enum';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() public price: number;
  private elem = this.el.nativeElement;

  constructor(private el: ElementRef) {}

  setHighlight(firstCount: number, secondCount: number): void {
    if (this.price > firstCount && this.price <= secondCount) {
      this.elem.style.color = Colors.greenPrice;
    } else if (this.price > secondCount) {
      this.elem.style.color = Colors.redPrice;
    }
  }

  ngOnInit() {
    this.setHighlight(500, 1000);
  }
}
