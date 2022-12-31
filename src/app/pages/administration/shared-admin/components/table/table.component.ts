import { Product } from '../../../../../models/interfaces/products.interface';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[];

  constructor(public matDialog: MatDialog) {}

  openEditDialog(elem: Product) {
    const dialogRef = this.matDialog.open(ModalComponent, {
      data: {
        name: elem.name,
        price: elem.price,
        description: '',
      },
      height: '450px',
      width: '400px',
    });
  }

  openWarnDialog(elem: Product) {
    const dialogRef = this.matDialog.open(ModalComponent, {
      data: { id: elem.id },
      height: '380px',
      width: '400px',
    });
  }

  ngOnInit(): void {}
}
