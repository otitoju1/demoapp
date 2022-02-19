import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { ModalController } from '@ionic/angular';
import { UpdateRecipePage } from 'src/app/modal/update-recipe/update-recipe.page';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.page.html',
  styleUrls: ['./recipedetails.page.scss'],
})
export class RecipedetailsPage implements OnInit {
  fetchedRecipe:any = "";
  isLoading: boolean = true;
  skeletonLoader:any = [1,2]

  constructor(private activatedRoute: ActivatedRoute,
     private recipeService: RecipeService, private modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if(!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipeService.getRecipe(recipeId).subscribe((recipe:any) => {
        this.isLoading = false
        this.fetchedRecipe = recipe.info
        console.log(recipe)
      })
    })
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: UpdateRecipePage,
      componentProps: {
        name: this.fetchedRecipe.name,
        method: this.fetchedRecipe.method,
        ingredient: this.fetchedRecipe.ingredient,
        photo: this.fetchedRecipe.photo,
        recipeId: this.fetchedRecipe._id
      }
    });
    return await modal.present();
  }
}
