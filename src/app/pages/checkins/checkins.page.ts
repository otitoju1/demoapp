import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-checkins',
  templateUrl: './checkins.page.html',
  styleUrls: ['./checkins.page.scss'],
})
export class CheckinsPage implements OnInit {
  data:any[] = []
  isLoading: boolean = true
  showLoading: boolean = true
  skeletonLoader:any = [1,2,3,4,5,6]
  constructor(public dataService: DataService, public loadingController: LoadingController) { }
  
  ngOnInit() {
 
    this.dataService.getUsers().subscribe((res:any) => {
      this.data = res.info
      this.isLoading = false;
      console.log(res.info)
    })
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

  parseAddress(address){
    const parsedAddress = `${address.suite}, ${address.street}, ${address.city} ${address.zipcode}`;
    return parsedAddress;
  }

  parseCompany(company) {
    const parsedCompany = `${company.name}`
    return parsedCompany;
  }

}
