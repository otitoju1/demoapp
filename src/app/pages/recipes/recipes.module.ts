import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import { RegistermodalPage } from '../../modal/registermodal/registermodal.page'
import { SharedDirectivesModules } from 'src/app/directives/shared-directives.modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule,
    SharedDirectivesModules
  ],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}
