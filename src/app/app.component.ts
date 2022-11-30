import { state } from './data/state';
import { Product } from './models/interfaces/products.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected data: Product[] = state || createRandomData(8);
}

function createRandomData(n: number) {
  const arr: Product[] = [];

  for (let i = 1; i <= n; i++) {
    const randomStr: string = (Math.random() + 1).toString(36).substring(2);
    const randomNum: number = Math.floor(Math.random() * (2000 - 1000)) + 1000;

    const obj: Product = {
      id: i,
      name: randomStr,
      price: randomNum
    };

    arr.push(obj);
  }
  return arr;
}
