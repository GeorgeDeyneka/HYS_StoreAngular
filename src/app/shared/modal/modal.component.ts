import { StoreService } from 'src/app/pages/store/store.service';
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
    private storeService: StoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public keys: string[] = Object.keys(this.data.keys);
  public form: FormGroup;
  public modalType: string = this.data.typeOfModal;

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.modalType === 'edit' || this.modalType === 'create') {
      this.form = this.fb.group({
        ...this.data.keys,
      });
    }
  }

  createElem() {
    if (this.form && this.modalType === 'create') {
      let { name, price, description } = this.form.getRawValue();
      this.storeService
        .create({
          name: name,
          author: 'George',
          price: +price,
          description: description,
        })
        .subscribe();
    }
    this.closeModal();
  }

  deleteElem() {
    this.storeService.delete(this.data.keys.id).subscribe();
    this.closeModal();
  }

  updateElem() {
    if (this.form && this.modalType === 'edit') {
      this.storeService
        .update(this.data.id, {
          ...this.form.getRawValue(),
          author: 'George',
        })
        .subscribe();
    }
    this.closeModal();
  }
}
