import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistermodalPageRoutingModule } from './registermodal-routing.module';

import { RegistermodalPage } from './registermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistermodalPageRoutingModule
  ],
  declarations: [RegistermodalPage]
})
export class RegistermodalPageModule {}
