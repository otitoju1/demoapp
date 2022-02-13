import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/tokenStorage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { Router } from '@angular/router'
import { ToastService } from 'src/app/services/toast.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoggedIn: boolean = false
  postData: any = {
    email: '',
    password: ''
  };
  

  constructor(
    private service: LoginService, 
    private tokenStorage: TokenStorageService, 
    private router: Router,
    private toastService: ToastService,
    public loadingController: LoadingController
    ) { }

  ngOnInit() {
    
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present()
    
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!', role);
  }

  

  validateInputs() {
    let email = this.postData.email.trim()
    let password = this.postData.password.trim()
    return (
      this.postData.email && this.postData.password && email.length > 0 && password.length > 0
    )
  }

  _login() {
    this.isLoggedIn = true;
    if(this.validateInputs()) {
      this.service.login(this.postData).subscribe((res:any) => {
        console.log(res);
        if(res) {
          // store the data
          // this.tokenStorage.store(AuthConstants.AUTH, res.token)
          this.isLoggedIn = false;
          this.tokenStorage.saveUser(AuthConstants.TOKEN_KEY, res.token)
          this.tokenStorage.saveUser(AuthConstants.USER_KEY, res.info)
          this.tokenStorage.saveQR(AuthConstants.QR_DATA, res.qrcode)
          this.router.navigate(['/icons'])
        }
        else {
          this.toastService.presentToast(res.message)
          this.isLoggedIn = false;
        }
      }, (error:any) => {
        console.log(error)
        this.toastService.presentToast(error.message)
        this.isLoggedIn = false;
      })
    }
    else {
      this.toastService.presentToast('Please enter email or password')
      this.isLoggedIn = false;
    }
  }

  

  
}
