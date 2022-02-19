import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipeService } from 'src/app/services/recipe.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.page.html',
  styleUrls: ['./update-recipe.page.scss'],
})
export class UpdateRecipePage implements OnInit {
  name;
  method;
  ingredient;
  photo;
  recipeId;

  constructor(private modalController: ModalController, 
    private recipeService: RecipeService, 
    private toastService: ToastService,
    ) { }

  ngOnInit() {

  }

  updateRecipe() {
    const updateData = {
      name: this.name,
      method: this.method,
      ingredient: this.ingredient,
      photo: this.photo
    }
  
    this.recipeService.updateRecipe(this.recipeId, updateData).subscribe((res:any) => {
      if(res.message === 'successful') {
        this.toastService.presentToast("Recipe updated successfully.")
      }
    }, (error:any) => {
      this.toastService.presentToast("An error occured, try again.")
    })
  }

  async closeModal() {
    await this.modalController.dismiss()
  }
}
