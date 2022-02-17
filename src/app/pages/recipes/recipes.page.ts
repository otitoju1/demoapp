import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ModalController } from '@ionic/angular';
import { RegistermodalPage } from 'src/app/modal/registermodal/registermodal.page';

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
  skeletonLoader:any = [1,2,3,4,5,6];
  currentModal = null;
  pageEl = document.querySelector('.ion-page');

  constructor(private recipeService: RecipeService, private modalController: ModalController) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((res:any) => {
      this.recipes = res.info
      this.isLoading = false
      console.log(res)
    }, (error:any) => {
      console.log(error.message)
    })
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: RegistermodalPage,
    });
    return await modal.present();
  }

// openSheetModal() {
//     this.openModal({
//       breakpoints: [0, 0.2, 0.5, 1],
//       initialBreakpoint: 0.2,
//     });
//   }

//  openCardModal() {
//     this.openModal({
//       swipeToClose: true,
//       presentingElement: this.pageEl,
//     });
//   }
// dismissModal() {
// if (this.currentModal) {
//   this.currentModal.dismiss().then(() => {
//     this.currentModal = null;
//   });
// }
// }

}
