import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Colors } from '../../models/enums/colors.enum';

@Directive({
  selector: '[appHighlightPrice]',
})
export class HighlightPriceDirective implements OnInit {
  @Input() public price: number;
  private elem = this.el.nativeElement;

  constructor(private el: ElementRef) {}

  setHighlight(firstCount: number, secondCount: number): void {
    if (this.price >= firstCount) {
      this.elem.style.color = Colors.violetPrice;
    }
    if (this.price >= secondCount) {
      this.elem.style.color = Colors.greenPrice;
    }
  }

  ngOnInit() {
    this.setHighlight(500, 1000);
  }
}
