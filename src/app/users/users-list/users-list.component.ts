import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() loadedUsers: User[] = [];
  constructor() {}

  ngOnInit() {}
}
