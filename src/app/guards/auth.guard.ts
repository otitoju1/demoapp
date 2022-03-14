import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/tokenStorage.service';
import { filter, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenStorageService, private router: Router, private alertCtrl: AlertController) {}

  canActivate(
    route: ActivatedRouteSnapshot){
      const expectedToken = route.data?.adminToken;

    return this.tokenService.getUser().pipe(
      filter(val => val !== null),
      take(1),
      map(user => {
        if(!user) {
          this.showAlert();
          return this.router.parseUrl('/login');
        }
        else {
          const token = user.token;

          if(!expectedToken || expectedToken == token) {
            return true;
          }
          else {
            this.showAlert();
            return false;
          }
        }
      })
    );
  }

  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: "Unauthorized",
      message: "You are not authorized to visit this page.",
      buttons: ["OK"]
    });

    alert.present();
  }
  
}
