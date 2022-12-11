import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  public modalClassName: string = 'unvisible';

  constructor() {}

  onHover() {
    this.modalClassName = 'modal';
  }

  onLeave() {
    this.modalClassName = 'unvisible';
  }

  ngOnInit(): void {}
}
