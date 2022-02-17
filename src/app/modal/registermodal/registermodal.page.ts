import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registermodal',
  templateUrl: './registermodal.page.html',
  styleUrls: ['./registermodal.page.scss'],
})
export class RegistermodalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss()
  }

}
