import { Component, OnInit, Input, ElementRef, EventEmitter, HostListener, OnChanges, SimpleChanges, Output } from '@angular/core';
import { City } from '../../../entities/city';
import { Ng2SearchPipe } from 'ng2-search-filter'

@Component({
  selector: 'typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  providers: [ Ng2SearchPipe ]
})
export class TypeaheadComponent implements OnInit, OnChanges {

  @Input() query: string;
  @Input() dataList: Array<City>
  @Output() onCitySelect: EventEmitter<City> = new EventEmitter<City>()

  limit: number = 1000;
  isOpen: boolean;
  typeaheadList: Array<City>;

  constructor(
      private searchPipe: Ng2SearchPipe,
      private _eRef: ElementRef) { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.query) {
      this.onQueryChange(change.query.currentValue)
    }
  }

  @HostListener('document:click', ['$event'])
	clickout(event: any) {
    if (!this._eRef.nativeElement.contains(event.target)) {
			this.isOpen = false;
		}
	}

  onQueryChange(updatedValue) {
    if (updatedValue) {
      this.isOpen = true;
      this.typeaheadList = this.searchPipe.transform(this.dataList, updatedValue.toString())
    }
  }

  itemClicked(city) {
    this.onCitySelect.emit(city);
    this.isOpen = false;
  }

}
