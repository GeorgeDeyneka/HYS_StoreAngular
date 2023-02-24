import { LocalStorageService } from './../../../../../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  removeToken() {
    this.localStorageService.removeData('token');
  }

  ngOnInit(): void {}
}
