import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  public arrFav: ProductType[] = [];
  public subj$: Subscription;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.subj$ = this.favoritesService.subj$.subscribe((data) => {
      this.arrFav = data;
    });
  }

  ngOnDestroy(): void {
    this.subj$.unsubscribe();
  }
}
