import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { User } from './users/users-list/user.model';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://demo.iofficeconnect.com/external/api/rest/v2/users';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth-username': environment.user,
    'x-auth-password': environment.pw
  }),
  params: new HttpParams().set('limit', '100')
};
@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get<User[]>(url, httpOptions).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(url, user, httpOptions)
      .pipe
      //error handler
      ();
  }
}
