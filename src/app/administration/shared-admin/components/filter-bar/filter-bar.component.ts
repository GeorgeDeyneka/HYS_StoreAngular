import { TableConfigurationService } from './../../services/table-configuration.service';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, map, take } from 'rxjs';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements AfterViewInit {
  public selected: string = '';
  // @Input() param: param

  // what is param?
  // how to call function from input?
  // how to view all list before searching?

  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('priceInput') priceInput: ElementRef;
  @ViewChild('dateInput') dateInput: ElementRef;

  constructor(private tableConfigurationService: TableConfigurationService) {}

  setSelect(event: any) {
    this.tableConfigurationService.setSelect(event.value);
  }

  // Rewrite that!

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        take(1),
        debounceTime(1000),
        map((event: any) => event.target.value)
      )
      .subscribe((data) => this.tableConfigurationService.setSearch(data));

    if (this.priceInput) {
      fromEvent(this.priceInput.nativeElement, 'input')
        .pipe(
          take(1),
          debounceTime(1000),
          map((event: any) => event.target.value)
        )
        .subscribe((data) => this.tableConfigurationService.setPrice(+data));
    }

    if (this.dateInput) {
      fromEvent(this.priceInput.nativeElement, 'input')
        .pipe(
          debounceTime(1000),
          map((event: any) => event.target.value)
        )
        .subscribe((data) => this.tableConfigurationService.setDate(data));
    }
  }
}
