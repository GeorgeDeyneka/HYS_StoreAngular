import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pc-menu',
  templateUrl: './pc-menu.component.html',
  styleUrls: ['./pc-menu.component.scss'],
})
export class PcMenuComponent {
  public modalClassName: string = 'unvisible';
  @Input() counter: number;

  constructor(private router: Router) {}

  onHover() {
    this.router.url === '/products/cart' || window.innerWidth < 1024
      ? (this.modalClassName = 'unvisible')
      : (this.modalClassName = 'modal');
  }

  onLeave() {
    this.modalClassName = 'unvisible';
  }
}
