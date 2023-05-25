import { RouteItem } from 'src/app/models/interfaces/route-item.interface';
import { LocalStorageService } from './../../../../../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';

const NAV_DATA: RouteItem[] = [
  { route: '/users', page: 'Users' },
  { route: '/products', page: 'Products' },
  { route: '/orders', page: 'Orders' },
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  protected navData = NAV_DATA;
  constructor(private localStorageService: LocalStorageService) {}

  removeToken() {
    this.localStorageService.removeData('authToken');
  }

  ngOnInit(): void {}
}
