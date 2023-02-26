import { DataFields } from 'src/app/models/enums/data-fields.enum';
import { Select } from 'src/app/models/enums/select.enum';
import { filterConfig } from 'src/app/models/interfaces/default-config.interface';

export class BaseFilter<T> {
  public data: T[] = [];
  public copyArr: T[] = [];
  public baseData: T[] = [];
  public pageIndex: number = 0;
  public dataLength: number;
  private num: number;

  constructor() {}

  setData(data: T[], num: number) {
    this.data = data;
    this.baseData = [...data];
    this.copyArr = [...data];
    this.dataLength = data.length;
    this.num = num;
    this.sliceForFirstPage();

    return this.data;
  }

  changeData(elem: filterConfig, param: 'price' | 'createdAt' | 'phone') {
    const typeOfName: string =
      param == DataFields.createdAt ? DataFields.username : DataFields.name;

    if (elem.search) {
      this.setSearch(elem, typeOfName);
    }

    if (
      (param === DataFields.price && !elem.search && !elem.price) ||
      (param === DataFields.createdAt && !elem.search && !elem.createdAt) ||
      (param === DataFields.phone && !elem.search && !elem.quantity)
    ) {
      this.resetFilterData();
    }

    if (elem.sort && elem.sortFrom) {
      this.setSortData(elem);
    }

    this.pageIndex = 0;
    this.dataLength = this.data.length;
    this.copyArr = [...this.data];
    this.sliceForFirstPage();

    return { data: this.data, length: this.dataLength, index: this.pageIndex };
  }

  setSearch(el: filterConfig, searchBy: string) {
    const regExp = new RegExp(el.search, 'i');
    this.data = this.baseData.filter(
      (prod: any) => prod[searchBy].search(regExp) >= 0
    );
  }

  setSortData(el: filterConfig) {
    this.data = [
      ...(el.search || el.price || el.createdAt || el.quantity
        ? this.data
        : this.baseData),
    ];
    this.data.sort(this.byField(el.sort, el.sortFrom));
  }

  resetFilterData() {
    this.data = this.baseData;
  }

  changePage(event: any) {
    let index = event.pageIndex;
    let lastIndex = event.previousPageIndex;
    if (index > lastIndex) {
      this.data = this.copyArr.slice((lastIndex + 1) * 5, (index + 1) * 5);
      this.pageIndex++;
    }
    if (index < lastIndex) {
      this.data = this.copyArr.slice(index * 5, lastIndex * 5);
      this.pageIndex--;
    }

    return { data: this.data, index: this.pageIndex };
  }

  sliceForFirstPage() {
    this.data = this.copyArr.slice(0, this.num);
  }

  byField(field: string, from: string) {
    if (field == DataFields.name || field == DataFields.username) {
      return (a: any, b: any) =>
        from == Select.more
          ? a[field].toLowerCase() < b[field].toLowerCase()
            ? 1
            : -1
          : a[field].toLowerCase() > b[field].toLowerCase()
          ? 1
          : -1;
    }
    return (a: any, b: any) =>
      from == Select.more
        ? a[field] < b[field]
          ? 1
          : -1
        : a[field] > b[field]
        ? 1
        : -1;
  }
}
