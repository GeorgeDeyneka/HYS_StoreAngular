import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  public arrFavorites: ProductType[] =
    this.localStorageService.getData<ProductType[]>('favData') || [];
  public subj$ = new BehaviorSubject<ProductType[]>(this.getData());

  constructor(private localStorageService: LocalStorageService) {}

  getData(): ProductType[] {
    return this.arrFavorites;
  }

  checkDublicates(elem: ProductType) {
    return this.arrFavorites.find((item) => item.id === elem.id);
  }

  addToFavorites(elem: ProductType): void {
    if (this.checkDublicates(elem)) return;

    this.arrFavorites.push(elem);
    this.localStorageService.setData<ProductType[]>(
      'favData',
      this.arrFavorites
    );
    this.updateSubj$();
  }

  deleteFromFavorites(prod: ProductType): void {
    this.arrFavorites = this.arrFavorites.filter((el) => el.id !== prod.id);
    this.localStorageService.setData<ProductType[]>(
      'favData',
      this.arrFavorites
    );
    this.updateSubj$();
  }

  checkProduct(prod: ProductType) {
    const data = this.arrFavorites;
    return data.filter((el) => el.id === prod.id);
  }

  updateSubj$() {
    this.subj$.next(this.arrFavorites);
  }
}
