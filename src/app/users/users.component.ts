import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() loadedUsers;
  searchText;
  constructor() {}
  onSearchUsers(event: Event) {
    const { value } = <HTMLInputElement>event.target;
    this.searchText = value;
    console.log(value);
    this.loadedUsers = this.loadedUsers.filter(user => {
      return user.firstName.toLowerCase().includes(value.toLowerCase());
    });
  }
  ngOnInit() {}
}
