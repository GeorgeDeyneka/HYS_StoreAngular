import { Injectable } from '@angular/core';
import { UserType } from 'src/app/models/interfaces/user.interface';
import { BaseFilter } from 'src/app/shared/classes/base-filter';

@Injectable({
  providedIn: 'root',
})
export class UsersFilterService extends BaseFilter<UserType> {}
