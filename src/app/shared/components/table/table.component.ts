import { HttpProduct } from '../../../models/interfaces/http-product.interface';
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
  @Input() typeOfTable: 'users' | 'products';

  constructor(public matDialog: MatDialog) {}

  openEditDialog(elem: any) {
    if (this.typeOfTable === 'products') {
      const dialogRef = this.matDialog.open(ModalComponent, {
        data: {
          typeOfData: this.typeOfTable,
          typeOfModal: 'edit',
          id: elem.id,
          keys: {
            name: elem.name,
            price: elem.price,
            description: elem.description,
          },
        },
        height: '450px',
        width: '400px',
      });
    } else if (this.typeOfTable === 'users') {
      const dialogRef = this.matDialog.open(ModalComponent, {
        data: {
          typeOfData: this.typeOfTable,
          typeOfModal: 'edit',
          id: elem.id,
          keys: {
            password: elem.password,
          },
        },
        height: '450px',
        width: '400px',
      });
    }
  }

  openWarnDialog(elem: HttpProduct) {
    const dialogRef = this.matDialog.open(ModalComponent, {
      data: {
        typeOfModal: 'delete',
        typeOfData: this.typeOfTable,
        id: elem.id,
      },
      height: '380px',
      width: '400px',
    });
  }

  ngOnInit(): void {}
}
