import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../users.service';
import { User } from '../users-list/user.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  firstName;
  lastName;
  email;
  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit() {}

  // add(firstName: string): void {
  //   firstName = firstName.trim();
  //   if (!firstName) { return; }
  //   this.usersService.addUser({ firstName } as User)
  //     .subscribe(hero => {
  //       this.loadedUsers.push(user);
  //     });
  // }
}
