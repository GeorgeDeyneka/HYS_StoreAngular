import { Component } from '@angular/core';
import { RouteItem } from 'src/app/models/interfaces/route-item.interface';

const NAV_DATA: RouteItem[] = [
  { route: '/', page: 'Store', iconPath: 'icon-bag' },
  { route: '/products', page: 'Products', iconPath: 'icon-laptop' },
  { route: '/products/cart', page: 'Cart', iconPath: 'icon-cart' },
];

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  public navData: RouteItem[] = NAV_DATA;
}
