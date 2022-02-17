import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

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
     private recipeService: RecipeService) { }

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

}
