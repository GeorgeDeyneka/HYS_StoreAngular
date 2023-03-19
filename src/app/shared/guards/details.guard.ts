import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductType } from 'src/app/models/interfaces/product.interface';
import { StoreService } from 'src/app/pages/store/store.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsGuard implements CanActivate {
  constructor(private router: Router, private storeService: StoreService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.paramMap.get('id');
    return this.storeService.getById<ProductType>(id!).pipe(
      map(() => {
        return true;
      }),
      catchError((error) => {
        this.router.navigateByUrl('/404');
        return of(false);
      })
    );
  }
}
