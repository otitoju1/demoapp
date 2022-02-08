import { Injectable } from '@angular/core';
import { usersData, User } from './data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private baseUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
  }
}
