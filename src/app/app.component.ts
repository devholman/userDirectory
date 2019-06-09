import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const url = 'https://demo.iofficeconnect.com/external/api/rest/v2/users';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth-username': 'username',
    'x-auth-password': 'password'
  }),
  params: new HttpParams().set('limit', '100')
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.onFetchUsers();
  }

  onFetchUsers() {
    this.http
      .get(
        'https://demo.iofficeconnect.com/external/api/rest/v2/users',
        httpOptions
      )
      .subscribe(res => {
        console.log(res);
      });
  }
}
