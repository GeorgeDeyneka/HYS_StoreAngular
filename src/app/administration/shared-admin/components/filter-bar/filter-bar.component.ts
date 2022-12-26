import { TableConfigurationService } from './../../services/table-configuration.service';
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

  constructor(private tableConfigService: TableConfigurationService) {}

  setSelect(event: any) {
    this.priceInput.nativeElement.value = '';
    this.tableConfigService.setPrice(0);
    this.tableConfigService.setSelect(event.value);
    this.checkDisabledPriceInput();
  }

  checkDisabledPriceInput() {
    return (this.priceInput.nativeElement.disabled = this.tableConfigService
      .DefaultConfig.select
      ? false
      : true);
  }

  ngAfterViewInit() {
    this.checkDisabledPriceInput();

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
