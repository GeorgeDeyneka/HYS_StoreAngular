import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  public modalClassName: string = 'unvisible';

  constructor(private router: Router) {}

  onHover() {
    this.router.url === '/products/cart'
      ? (this.modalClassName = 'unvisible')
      : (this.modalClassName = 'modal');
  }

  onLeave() {
    this.modalClassName = 'unvisible';
  }

  ngOnInit(): void {}
}
