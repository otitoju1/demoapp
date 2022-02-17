import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.page.html',
  styleUrls: ['./update-recipe.page.scss'],
})
export class UpdateRecipePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss()
  }
}
