import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinsPageRoutingModule } from './checkins-routing.module';

import { CheckinsPage } from './checkins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinsPageRoutingModule
  ],
  declarations: [CheckinsPage]
})
export class CheckinsPageModule {}
