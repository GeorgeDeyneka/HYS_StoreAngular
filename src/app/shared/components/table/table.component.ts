import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modals/modal/modal.component';
import { ModalTypes } from 'src/app/models/enums/modal-types.enum';
import { DataName } from 'src/app/models/enums/data-name.enum';
import { WarnModalComponent } from '../../modals/warn-modal/warn-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[];
  @Input() typeOfTable: 'users' | 'products' | 'orders';

  constructor(public matDialog: MatDialog) {}

  openEditDialog(elem: any) {
    const config: Object =
      this.typeOfTable === DataName.products
        ? {
            data: {
              typeOfData: this.typeOfTable,
              typeOfModal: ModalTypes.edit,
              id: elem.id,
              keys: {
                name: elem.name,
                price: elem.price,
                description: elem.description,
              },
            },
            height: '450px',
            width: '400px',
          }
        : this.typeOfTable === DataName.users
        ? {
            data: {
              typeOfData: this.typeOfTable,
              typeOfModal: ModalTypes.edit,
              id: elem.id,
            keys: {
                password: '',
              },
            },
            height: '250px',
            width: '400px',
          }
        : {
            data: {
              typeOfData: this.typeOfTable,
              typeOfModal: ModalTypes.edit,
              products: elem.products,
              id: elem.id,
              keys: {
                name: elem.name,
                phone: elem.phone,
                message: elem.message
              },
            },
            height: '450px',
            width: '400px',
          };

    const dialogRef = this.matDialog.open(ModalComponent, config);
  }

  openWarnDialog(elem: any) {
    const config: Object = {
      data: {
        typeOfData: this.typeOfTable,
        typeOfModal: ModalTypes.delete,
        id: elem.id,
      },
      height: '450px',
      width: '400px',
    };

    const dialogRef = this.matDialog.open(WarnModalComponent, config);
  }

  ngOnInit(): void {}
}
