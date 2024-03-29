import { Component, Input } from '@angular/core';
import { RouteItem } from 'src/app/models/interfaces/route-item.interface';

const NAV_DATA: RouteItem[] = [
  { route: '/products', page: 'Products', iconPath: 'icon-laptop' },
  { route: '/products/cart', page: 'Cart', iconPath: 'icon-cart' },
  {
    route: '/products/favorites',
    page: 'Favorites',
    iconPath: 'icon-favorites',
  },
];

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  @Input() counter: number;
  public navData: RouteItem[] = NAV_DATA;
}
