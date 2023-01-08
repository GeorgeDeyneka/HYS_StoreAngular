import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends BaseHttpService {
  override path: string = 'orders/';
}
