import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() filterEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filterPressed(e){
    this.filterEvent.emit(e.target.value)
  }

}
