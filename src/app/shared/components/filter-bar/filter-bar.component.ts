import { TableConfigService } from '../../../pages/administration/shared/services/table-config.service';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, fromEvent, map } from 'rxjs';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { ModalTypes } from 'src/app/models/enums/modal-types.enum';
import { DataName } from 'src/app/models/enums/data-name.enum';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements AfterViewInit {
  @Input() param: 'products' | 'users' | 'orders';

  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('priceInput') priceInput: ElementRef;
  @ViewChild('dateInput') dateInput: ElementRef;

  public sortDis: boolean = true;
  public priceOrDateInputDis: boolean = true;
  public sortValue: string;
  public sortFromVal: string;
  public priceOrDateFromVal: string;

  constructor(
    private tableConfigService: TableConfigService,
    public matDialog: MatDialog
  ) {}

  openCreateDialog() {
    const config: Object =
      this.param == DataName.products
        ? {
            data: {
              typeOfData: this.param,
              typeOfModal: ModalTypes.create,
              keys: {
                name: '',
                price: '',
                description: '',
              },
            },
            height: '450px',
            width: '400px',
          }
        : {
            data: {
              typeOfData: this.param,
              typeOfModal: ModalTypes.create,
              keys: {
                username: '',
              },
            },
            height: '250px',
            width: '400px',
          };

    const dialogRef = this.matDialog.open(ModalComponent, config);
  }

  setInputDisabled(event: any) {
    if (this.priceInput) {
      this.priceInput.nativeElement.value = '';
      this.tableConfigService.setPrice(0);
      this.tableConfigService.setPriceSelect(event.value);
    } else if (this.dateInput) {
      this.dateInput.nativeElement.value = '';
      this.tableConfigService.setDate('');
      this.tableConfigService.setDateSelect(event.value);
    }
    this.priceOrDateInputDis =
      !this.tableConfigService.DefaultConfig.priceSelect &&
      !this.tableConfigService.DefaultConfig.dateSelect;
  }

  setSort(event: any) {
    this.tableConfigService.setSort(event.value);
  }

  resetConfig() {
    this.tableConfigService.resetConfig();
    this.searchInput.nativeElement.value = '';
    this.priceOrDateFromVal = '';
    this.sortFromVal = '';
    if (this.priceInput) this.priceInput.nativeElement.value = '';
    this.sortValue = '';
  }

  setSortFrom(event: any) {
    this.tableConfigService.setSortFrom(event.value);
    this.sortDis = !!!this.tableConfigService.DefaultConfig.sortFrom;
    if (!event.value) this.sortValue = '';
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(1000),
        map((event: any) => event.target.value)
      )
      .subscribe((data) => this.tableConfigService.setSearch(data));

    if (this.priceInput) {
      fromEvent(this.priceInput.nativeElement, 'input')
        .pipe(
          debounceTime(1000),
          map((event: any) => event.target.value)
        )
        .subscribe((data) => this.tableConfigService.setPrice(+data));
    }

    if (this.dateInput) {
      fromEvent(this.dateInput.nativeElement, 'input')
        .pipe(
          debounceTime(1000),
          map((event: any) => event.target.value)
        )
        .subscribe((data) => this.tableConfigService.setDate(data));
    }
  }
}
