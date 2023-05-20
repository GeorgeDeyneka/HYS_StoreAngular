import { UsersService } from '../../../pages/administration/shared/services/users.service';
import { StoreService } from 'src/app/pages/store/store.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalText } from 'src/app/models/enums/modal-text.enum';
import { ModalTypes } from 'src/app/models/enums/modal-types.enum';
import { DataName } from 'src/app/models/enums/data-name.enum';
import { OrdersService } from 'src/app/pages/administration/shared/services/orders.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    private storeService: StoreService,
    private usersService: UsersService,
    private ordersService: OrdersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public keys: string[] | null = this.data.keys
    ? Object.keys(this.data.keys)
    : null;
  public form: FormGroup;
  public modalType: string = this.data.typeOfModal;
  public modalText: any = ModalText;

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group(this.data.keys);
  }

  createElem() {
    if (this.data.typeOfData === DataName.products) {
      const formData = this.form.getRawValue();
      if (formData.price) {
        formData.price = Number(formData.price);
      }
      this.storeService.create(formData).subscribe({
        next: (response) => {},
        error: (error) => {},
      });
    } else {
      this.usersService
        .create({
          password: '123123',
          ...this.form.getRawValue(),
        })
        .subscribe({
          next: (response) => {},
          error: (error) => {},
        });
    }
    this.closeModal();
  }

  updateElem() {
    const formData = this.form.getRawValue();
    if (formData.price) {
      formData.price = Number(formData.price);
    }

    const upd = (
      this.data.typeOfData === DataName.products
        ? this.storeService
        : this.data.typeOfData === DataName.users
        ? this.usersService
        : this.ordersService
    )
      .update(this.data.id, {
        ...formData,
      })
      .subscribe({
        next: (response) => {},
        error: (error) => {},
      });
    this.closeModal();
  }
}
