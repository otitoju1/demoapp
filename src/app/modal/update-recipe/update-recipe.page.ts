import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipeService } from 'src/app/services/recipe.service';
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


  // updateData: any = {
  //   name: '',
  //   method: '',
  //   ingredient: '',
  //   photo: ''
  // };
  constructor(private modalController: ModalController, private recipeService: RecipeService) { }

  ngOnInit() {
    console.log(`${this.recipeId}`)
  }

  updateRecipe() {
    const updateData = {
      name: this.name,
      method: this.method,
      ingredient: this.ingredient
    }
    console.log(updateData)
    this.recipeService.updateRecipe(this.recipeId, updateData).subscribe((res:any) => {
      console.log(res)
    })
  }

  async closeModal() {
    await this.modalController.dismiss()
  }
}
