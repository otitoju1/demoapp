import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(apiName: string, data: any) {
    //const headers = new HttpHeaders();
    // set headers
  const HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    //const options = { headers: headers, withCredentials: false}
    const url = environment.apiUrl + apiName;

    return this.http.post(url, JSON.stringify(data), HttpOptions)
  }
}
