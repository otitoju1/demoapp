import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'barcode',
    loadChildren: () => import('./pages/barcode/barcode.module').then( m => m.BarcodePageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'precheckins',
    loadChildren: () => import('./pages/precheckins/precheckins.module').then( m => m.PrecheckinsPageModule)
  },
  {
    path: 'checkins',
    loadChildren: () => import('./pages/checkins/checkins.module').then( m => m.CheckinsPageModule)
  },
  {
    path: 'checkouts',
    loadChildren: () => import('./pages/checkouts/checkouts.module').then( m => m.CheckoutsPageModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./pages/icons/icons.module').then( m => m.IconsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
