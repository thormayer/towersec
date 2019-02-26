import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() item;
  @Input() isEdit;
  @Output() formSubmitted = new EventEmitter();

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })
  constructor() { }


  ngOnInit() {
  }

  submitClicked(){
    this.userForm.valid ?
      this.formSubmitted.emit({edit: this.isEdit, user: this.populateUserObject(this.userForm)})
    : alert('please fill all the fields..')
  }

  populateUserObject(form){
    return {
      first_name: form.controls.firstName.value,
      last_name: form.controls.lastName.value,
      email: form.controls.email.value,
    }
  }

}
