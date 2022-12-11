import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() theme: 'blue' | 'aqua' | 'violet';
  @Input() size: 'small' | 'medium' | 'large'

  protected color: string;
  protected padding: string;

  constructor() { }
  
  changeSize(size: string = 'medium'): string {
        switch (size) {
          case 'small':
            return (this.padding = '1px 4px');

          case 'large':
            return (this.color = '8px 20px');

          default:
            return (this.color = '4px 10px');
        }
  }

  changeTheme(theme: string = 'blue'): string {
    switch (theme) {
      case 'violet':
        return (this.color = '#9551ff');

      case 'aqua':
        return (this.color = '#5ec7ff');

      default:
        return (this.color = '#4949ff');
    }
  }

  ngOnInit(): void {}
}
