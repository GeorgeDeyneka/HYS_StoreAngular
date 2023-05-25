import { Component, Input, Renderer2 } from '@angular/core';
import { RouteItem } from 'src/app/models/interfaces/route-item.interface';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
  @Input() routesData: RouteItem[] = [];
  public isOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.renderer.setStyle(
      document.body,
      'overflow',
      this.isOpen ? 'hidden' : ''
    );
  }
}
