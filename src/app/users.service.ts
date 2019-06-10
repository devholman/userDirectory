import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    return this.http.get<[]>(url, httpOptions).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
