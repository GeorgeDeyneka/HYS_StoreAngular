import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataName } from 'src/app/models/enums/data-name.enum';
import { ModalText } from 'src/app/models/enums/modal-text.enum';
import { OrdersService } from 'src/app/pages/administration/shared/services/orders.service';
import { UsersService } from 'src/app/pages/administration/shared/services/users.service';
import { StoreService } from 'src/app/pages/store/store.service';

@Component({
  selector: 'app-warn-modal',
  templateUrl: './warn-modal.component.html',
  styleUrls: ['./warn-modal.component.scss'],
})
export class WarnModalComponent {
  constructor(
    public dialogRef: MatDialogRef<WarnModalComponent>,
    private storeService: StoreService,
    private usersService: UsersService,
    private ordersService: OrdersService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public modalText: any = ModalText;
  public modalType: string = this.data.typeOfModal;

  deleteElem() {
    const del = (
      this.data.typeOfData === DataName.products
        ? this.storeService.delete(this.data.id)
        : this.data.typeOfData === DataName.users
        ? this.usersService.delete(this.data.id)
        : this.ordersService.delete(this.data.id)
    ).subscribe({
      next: (response) => {},
      error: (error) => {
        if (error.status === 403) {
          this.router.navigateByUrl('error/403');
        }
      },
    });
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  // ? Remove horizontal scroll!
}
