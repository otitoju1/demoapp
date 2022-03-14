import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipedetailsPageRoutingModule } from './recipedetails-routing.module';

import { RecipedetailsPage } from './recipedetails.page';
import { SharedDirectivesModules } from 'src/app/directives/shared-directives.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipedetailsPageRoutingModule,
    SharedDirectivesModules
  ],
  declarations: [RecipedetailsPage]
})
export class RecipedetailsPageModule {}
