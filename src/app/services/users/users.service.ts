import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userId: any;
  private endpoint = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) { }
  updateUserId(id: any) {
    this.userId = id
  }

  getUsers(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  getUserById(id: any) {
    return this.http.get(this.endpoint + id);
  }
}
