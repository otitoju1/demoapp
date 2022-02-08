import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title:"Pre-check-ins", url:"precheckins", icon:"fast-food-outline" },
    { title:"Check-ins", url:"checkins", icon:"camera" },
    { title:"Check-outs", url:"checkouts", icon:"camera" },
    { title:"Barcode scanner", url:"barcode", icon:"scan" },
    { title:"Login", url:"login", icon:"signin" },
  ];
  public labels = [ ];
  constructor() {}
}
