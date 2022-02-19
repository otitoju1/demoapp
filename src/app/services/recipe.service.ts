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

  updateRecipe(recipeId:string, updateData:any) {
    return this.service.update(`/api/v1/recipe/${recipeId}`, updateData)
  }

  deleteRecipe(recipeId:string) {
    return this.service.delete(`/api/v1/recipe/${recipeId}`)
  }
}
