import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss'],
})
export class OrderModalComponent {
  constructor(private dialogRef: MatDialogRef<OrderModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
