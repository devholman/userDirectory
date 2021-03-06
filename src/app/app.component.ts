import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedUsers = [];
  isFetchingUser = false;
  constructor(private http: HttpClient, private usersService: UsersService) {}
  ngOnInit() {}
}
