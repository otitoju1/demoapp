import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title:"Pre-check-ins", url:"precheckins", icon:"exit" },
    { title:"Check-ins", url:"checkins", icon:"arrow-down" },
    { title:"Check-outs", url:"checkouts", icon:"arrow-up" },
    { title:"Barcode scanner", url:"barcode", icon:"scan" },
    { title:"Login", url:"login", icon:"arrow-forward-circle" },
  ];
  public labels = [ ];
  constructor() {}
}
