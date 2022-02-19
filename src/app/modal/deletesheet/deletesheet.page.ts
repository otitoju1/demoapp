import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipeService } from 'src/app/services/recipe.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-deletesheet',
  templateUrl: './deletesheet.page.html',
  styleUrls: ['./deletesheet.page.scss'],
})
export class DeletesheetPage implements OnInit {
  recipeId;

  constructor(private modalController: ModalController, 
    private recipeService: RecipeService, 
     private toastService: ToastService,) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss()
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId).subscribe((res:any) => {
      if(res.message === "deleted") {
        this.toastService.presentToast("Recipe deleted successfully.")
      }
    }, (error) => {
      this.toastService.presentToast("An error has occured, try again.")
    })
  }

}
