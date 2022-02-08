import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecheckinsPage } from './precheckins.page';

const routes: Routes = [
  {
    path: '',
    component: PrecheckinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecheckinsPageRoutingModule {}
