import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  filteredUsers = [];
  loadedUsers = [];
  isFetchingUser = false;
  constructor(private http: HttpClient, private usersService: UsersService) {}
  onSearchUsers(event: Event) {
    const { value } = <HTMLInputElement>event.target;

    this.filteredUsers = this.loadedUsers.filter(user => {
      return user.firstName.toLowerCase().includes(value.toLowerCase());
    });
  }
  ngOnInit() {
    this.isFetchingUser = true;

    this.usersService.fetchUsers().subscribe(
      users => {
        this.isFetchingUser = false;
        this.loadedUsers = users;
      },
      err => console.log(err),
      () => {
        this.filteredUsers = this.loadedUsers;
      }
    );
  }
}
