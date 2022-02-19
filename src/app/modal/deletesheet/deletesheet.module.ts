import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletesheetPageRoutingModule } from './deletesheet-routing.module';

import { DeletesheetPage } from './deletesheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletesheetPageRoutingModule
  ],
  declarations: [DeletesheetPage]
})
export class DeletesheetPageModule {}
