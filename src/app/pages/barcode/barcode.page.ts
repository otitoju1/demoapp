import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  result = null;
  scanActive = false;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    BarcodeScanner.prepare();
  }

  ngOnDestroy() {
    BarcodeScanner.stopScan();
  }

  startScan = async () => {
    BarcodeScanner.hideBackground(); // make background of WebView transparent
  
    const allowed = await this.checkPermission();
    if(allowed) {
      this.scanActive = true;
      const result = await BarcodeScanner.startScan();
      console.log(result);
      if(result.hasContent) {
        this.result = result.content;
        this.scanActive = false
      }
    }
  };

  async checkPermission() {
    return new Promise( async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true});
      if(status.granted) {
        resolve(true);
      }
      else if(status.denied) {
        const alert = await this.alertController.create({
          header: 'No permission',
          message: 'Please allow camera access in your settings',
          buttons: [{
            text: 'No',
            role: 'Cancel'
          },
          {
            text: 'Open settings',
            handler: () => {
              BarcodeScanner.openAppSettings();
              resolve(false);
            }
          }
        ]
        })
        await alert.present()
      }
      else {
        resolve(false);
      }
    })
  }

  

  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    this.scanActive = false;
  };

}
