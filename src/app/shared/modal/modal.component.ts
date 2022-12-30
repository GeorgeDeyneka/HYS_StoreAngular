import { Product } from './../../models/interfaces/products.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  public keys: string[] = Object.keys(this.data);
  public form: FormGroup;
  public modalType: string;

  checkTypeModal() {
    this.keys.includes('id')
      ? (this.modalType = 'delete')
      : (this.modalType = 'edit');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.checkTypeModal();
    if (this.modalType === 'edit') {
      this.form = this.fb.group({
        ...this.data,
      });
    }
  }
}
