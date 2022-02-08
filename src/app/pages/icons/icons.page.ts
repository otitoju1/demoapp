import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
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

  constructor(
    public dataService: DataService, 
    private loginService: LoginService
    ) { }
  
  ngOnInit() {
    this.dataService.getUsers().subscribe((res:any) => {
      this.data = res
      console.log(res)
    })

    this.loginService.getQrCode().subscribe((res: any) => {
      this.qrData = res.code
    })

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
