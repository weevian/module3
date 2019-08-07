import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'pages-list', loadChildren: './pages/pages-list/pages-list.module#PagesListPageModule' },
  { path: 'place-detail/:place_id', loadChildren: './pages/place-detail/place-detail.module#PlaceDetailPageModule' },
  { path: 'add-review', loadChildren: './pages/add-review/add-review.module#AddReviewPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
