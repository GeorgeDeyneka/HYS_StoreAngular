import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonTextEnum } from 'src/app/models/enums/button-text.enum';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() public productItem: ProductType;
  public buttonText: string = ButtonTextEnum.add;
  private cartSubj$: Subscription;
  private favSubj$: Subscription;
  protected isFavorite: boolean;
  protected likedStyles: { [key: string]: boolean };

  constructor(
    private cartService: CartService,
    private favoritesService: FavoritesService
  ) {}

  isProductInCart(data: ProductType[]) {
    if (!data.length) {
      this.buttonText = ButtonTextEnum.add;
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.productItem.id && data[i].count) {
        this.buttonText = ButtonTextEnum.inCart;
        return;
      }
      this.buttonText = ButtonTextEnum.add;
    }
  }

  makeFavActive() {
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.addToFav() : this.removeFromFav();
  }

  isProductInFav(data: ProductType[]) {
    this.isFavorite = data.some((elem) => elem.id === this.productItem.id);
    this.likedStyles = { liked: this.isFavorite };
  }

  ngOnInit(): void {
    this.cartSubj$ = this.cartService.subj$.subscribe((data) => {
      this.isProductInCart(data);
    });

    this.favSubj$ = this.favoritesService.subj$.subscribe((data) => {
      this.isProductInFav(data);
    });
  }

  addToFav(): void {
    this.favoritesService.addToFavorites(this.productItem);
  }

  removeFromFav(): void {
    this.favoritesService.deleteFromFavorites(this.productItem);
  }

  addToCart(): void {
    this.cartService.addToCart(this.productItem);
    this.buttonText = ButtonTextEnum.inCart;
  }

  ngOnDestroy() {
    this.cartSubj$.unsubscribe();
    this.favSubj$.unsubscribe();
  }
}
