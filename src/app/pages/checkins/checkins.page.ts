import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-checkins',
  templateUrl: './checkins.page.html',
  styleUrls: ['./checkins.page.scss'],
})
export class CheckinsPage implements OnInit {
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
