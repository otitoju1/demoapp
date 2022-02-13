import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/tokenStorage.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.page.html',
  styleUrls: ['./icons.page.scss'],
})
export class IconsPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  data:any[] = []
  qrData: any = ''
  user:any = {}

  constructor(
    public dataService: DataService, 
    private loginService: LoginService,
    private tokenService: TokenStorageService
    ) { }
  
  ngOnInit() {
    const qr = this.tokenService.getToken('qrData')
    const userData:any = this.tokenService.getToken('userData')
    this.user = JSON.parse(userData)
    this.qrData = qr
    this.dataService.getUsers().subscribe((res:any) => {
      this.data = res.info
      console.log(res)
    })

    // this.loginService.getQrCode().subscribe((res: any) => {
    //   this.qrData = res.code
    // })

  }

  parseAddress(address){
    const parsedAddress = `${address.suite}, ${address.street}, ${address.city} ${address.zipcode}`;
    return parsedAddress;
  }

  parseCompany(company) {
    const parsedCompany = `${company.name}`
    return parsedCompany;
  }



}
