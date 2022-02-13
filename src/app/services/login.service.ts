import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { TokenStorageService } from './tokenStorage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private baseUrl = ""
  public isLoggedIn: boolean = false;

  

  constructor(
    private httpService: HttpService,
    private storageService: TokenStorageService,
    private router: Router
  ) { }

  login(postData: any): Observable<any> {
    return this.httpService.post('/api/v1/login', postData)
  }

  getQrCode() {
    return this.httpService.get('/api/v1/qrcode')
  }

  logout() {
    this.storageService.removeStorageItem(AuthConstants.TOKEN_KEY).then( res => {
      this.router.navigate(['/login'])
    })
  }
  
}
