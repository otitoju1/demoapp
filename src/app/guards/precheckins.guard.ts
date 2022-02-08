import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { TokenStorageService } from '../services/tokenStorage.service';

@Injectable({
  providedIn: 'root'
})
export class PrecheckinsGuard implements CanActivate {
  constructor(public router: Router, public tokenService: TokenStorageService) {}
  canActivate(): Promise<boolean> {
      return new Promise(resolve => {
        this.tokenService.get(AuthConstants.AUTH).then(res => {
          if(res) {
            resolve(true)
          }
          else {
            this.router.navigate(['login'])
            resolve(false)
          }
        })
        .catch(err => {
          resolve(false)
        })
      })
  }
  
}
