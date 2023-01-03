import { TableConfigService } from '../../services/table-config.service';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements AfterViewInit {
  @Input() param: 'products' | 'users';

  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('priceInput') priceInput: ElementRef;
  @ViewChild('dateInput') dateInput: ElementRef;

  public sortDis: boolean = true;
  public priceInputDis: boolean = true;
  public sortValue: string;

  constructor(private tableConfigService: TableConfigService) {}

  setPriceSelect(event: any) {
    this.priceInput.nativeElement.value = '';
    this.tableConfigService.setPrice(0);
    this.tableConfigService.setPriceSelect(event.value);
    this.priceInputDis = !!!this.tableConfigService.DefaultConfig.priceSelect;
  }

  setSort(event: any) {
    this.tableConfigService.setSort(event.value);
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
