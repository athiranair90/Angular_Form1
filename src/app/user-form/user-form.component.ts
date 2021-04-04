import { Component, OnInit } from '@angular/core';
import { FormsModule, Form, NgForm } from '@angular/forms';
import { User } from './file1';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  showList: boolean = false;
  firstName: string = "Coder";
  lastName: string = "Byte";
  Phone: Number = 8885559999;
  defaultuser: any;
  userList: Array<User> = [];

  constructor() {
  }

  ngOnInit(): void {
    //this.firstName
    let defaultuser = new User();
    defaultuser.firstName = "Coder";
    defaultuser.lastName = "Byte";
    defaultuser.Phone = 8885559999;

    //this.userList.push(defaultuser)
  }

  AddUser(data: NgForm) {
    console.log(data.value)
    let user = new User();
    user.firstName = data.value.fname;
    user.lastName = data.value.lname;
    user.Phone = Number(data.value.mob);

    if (this.userList.some(a => a.Phone === data.value.mob)) {
      this.showList = true;
    } else {
      this.showList = false;
      this.userList.push(user);
    }

    this.userList.sort(function (a, b) {
      return a.lastName.localeCompare(b.lastName);
    });

    console.log(this.userList.length);
    console.log(data.value.mob);
  }

}
