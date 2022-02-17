import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistermodalPage } from './registermodal.page';

const routes: Routes = [
  {
    path: '',
    component: RegistermodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistermodalPageRoutingModule {}
