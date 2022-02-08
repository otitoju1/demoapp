import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconsPageRoutingModule } from './icons-routing.module';

import { IconsPage } from './icons.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconsPageRoutingModule,
    SharedModule
  ],
  declarations: [IconsPage]
})
export class IconsPageModule {}
