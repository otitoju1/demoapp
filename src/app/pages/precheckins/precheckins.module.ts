import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrecheckinsPageRoutingModule } from './precheckins-routing.module';

import { PrecheckinsPage } from './precheckins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecheckinsPageRoutingModule
  ],
  declarations: [PrecheckinsPage]
})
export class PrecheckinsPageModule {}
