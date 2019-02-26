import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() itemClickEvent = new EventEmitter();
  @Input() list;

  constructor() { }

  ngOnInit() {
    console.log(this.list)
  }

  itemClicked(item) {
    console.log(item)
    this.itemClickEvent.emit(item);
  }

}
