import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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

  constructor(public dataService: DataService) { }
  
  ngOnInit() {
    this.dataService.getUsers().subscribe((res:any) => {
      this.data = res
      console.log(res)
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
