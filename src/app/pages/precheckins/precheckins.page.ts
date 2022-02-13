import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-precheckins',
  templateUrl: './precheckins.page.html',
  styleUrls: ['./precheckins.page.scss'],
})
export class PrecheckinsPage implements OnInit {
  data:any[] = [];
  isLoading: boolean = true;
  skeletonLoader:any = [1,2,3,4,5,6]
  
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getDatas()
  }

  getDatas() {
    this.service.getUsers().subscribe((res:any) => {
      this.data = res.info
      this.isLoading = false;
    })
  }

  // parseAddress(address){
  //   const parsedAddress = `${address.suite}, ${address.street}, ${address.city} ${address.zipcode}`;
  //   return parsedAddress;
  // }

  // parseCompany(company) {
  //   const parsedCompany = `${company.name}`
  //   return parsedCompany;
  // }

}
