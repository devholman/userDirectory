import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = 'https://demo.iofficeconnect.com/external/api/rest/v2/users';
//TODO: REMOVE HARDCODED CREDENTIALS
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth-username': 'dholman',
    'x-auth-password': 'Alyse123'
  }),
  params: new HttpParams().set('limit', '100')
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedUsers: [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.onFetchUsers();
  }

  onFetchUsers() {
    this.http
      .get<[]>(
        'https://demo.iofficeconnect.com/external/api/rest/v2/users',
        httpOptions
      )
      .pipe(
        map(resp => {
          return resp;
        })
      )
      .subscribe(users => {
        this.loadedUsers = users;
      });
  }
}
