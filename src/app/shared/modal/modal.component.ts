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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public keys: string[] = Object.keys(this.data.keys);
  public form: FormGroup;
  public modalType: string = this.data.typeOfModal;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.modalType === 'edit' || this.modalType === 'create') {
      this.form = this.fb.group({
        ...this.data.keys,
      });
    }
  }
}
