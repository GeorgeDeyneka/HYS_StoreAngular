import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement.innerText)
    // this.el.nativeElement.style.color = "yellow";
  }
}
