import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.page.html',
  styleUrls: ['./checkouts.page.scss'],
})
export class CheckoutsPage implements OnInit {
  data:any[] = []
  isLoading: boolean = true
  skeletonLoader:any = [1,2,3,4,5,6]
  
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getDatas()
  }

  getDatas() {
    this.service.getUsers().subscribe((res:any) => {
      this.data = res.info;
      this.isLoading = false;
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
