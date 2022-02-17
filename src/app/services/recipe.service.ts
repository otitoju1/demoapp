import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private service: HttpService) { }

  getRecipes() {
    return this.service.get("/api/v1/recipes")
  }

  getRecipe(recipeId:string) {
    return this.service.get(`/api/v1/recipe/${recipeId}`)
  }
}
