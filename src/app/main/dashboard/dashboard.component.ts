import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list;
  displayedList;
  currentItem;
  currentTerm;
  isEditMode:Boolean;

  constructor(private service: AppService){ }

  ngOnInit() {
    this.getList();
  }

  setEditMode(isEdit){
    return this.isEditMode = isEdit;
  }

  setCurrentItem(item) {
    return this.currentItem = item;
  }

  itemClicked(item) {
    this.setEditMode(true);
    this.setCurrentItem(item);
  }

  filterEvent(term) {
    return this.displayedList = this.filterList(term);
  }

  filterList(term){
    return this.list
            .filter(data => data.first_name.toLowerCase()
                .indexOf(term.toLowerCase()) > -1)
  }

  openNew(){
    this.setEditMode(false);
    this.setCurrentItem({});

  }

  getFormEvent(event) {
    console.log(event)
    this.addToList(event.user)
  }

  addToList(item) {
    this.list.push(item);
    this.displayedList = this.list;
  }

  getList() {
    return this.displayedList = this.list = this.service.getJSON();
  }

}
