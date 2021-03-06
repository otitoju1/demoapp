import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  baseUrl = `${environment.apiUrl}/api/v1/users`

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
  }
}
