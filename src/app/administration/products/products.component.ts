import { BehaviorSubject, first } from 'rxjs';
import { Product } from './../../models/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public data: Product[];
  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.data.pipe(first()).subscribe((data) => {
      this.data = data;
      if (this.data.length) this.loading$.next(false);
    });
  }
}
