import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  
  public recipes = []
  length = 50
  start = 0
  isLoading: boolean = true;
  skeletonLoader:any = [1,2,3,4,5,6]

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((res:any) => {
      this.recipes = res.info
      this.isLoading = false
      console.log(res)
    }, (error:any) => {
      console.log(error.message)
    })
  }

}
