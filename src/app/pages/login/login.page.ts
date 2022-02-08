import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/tokenStorage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { Router } from '@angular/router'
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  postData: any = {
    email: '',
    password: ''
  };
  

  constructor(
    private service: LoginService, 
    private tokenStorage: TokenStorageService, 
    private router: Router,
    private toastService: ToastService
    ) { }

  ngOnInit() {
    
  }

  validateInputs() {
    let email = this.postData.email.trim()
    let password = this.postData.password.trim()
    return (
      this.postData.email && this.postData.password && email.length > 0 && password.length > 0
    )
  }

  _login() {
    if(this.validateInputs()) {
      console.log(this.postData)
      console.log(this.postData.email)
      console.log(this.postData.password)
      this.service.login(this.postData).subscribe((res:any) => {
        if(res) {
          // store the data
          this.tokenStorage.store(AuthConstants.AUTH, res.token)
          this.router.navigate(['/precheckins'])
        }
        else {
          this.toastService.presentToast(res.message)
        }
      }, (error:any) => {
        console.log(error)
        this.toastService.presentToast(error.message)
      })
    }
    else {
      this.toastService.presentToast('Please enter email or password')
    }
  }

  
}
