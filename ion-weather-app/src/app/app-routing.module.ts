import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  // 1. change redirectTo weatherlist so that by default this becomes your homepage.
  { path: '', redirectTo: 'weatherlist', pathMatch: 'full' },
  { path: 'weatherlist', loadChildren: './pages/weatherlist/weatherlist.module#WeatherlistPageModule' },
  { path: 'weatherdetails/:timestamp/:city', loadChildren: './pages/weatherdetails/weatherdetails.module#WeatherdetailsPageModule' },
  { path: 'weathersaved', loadChildren: './pages/weathersaved/weathersaved.module#WeathersavedPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
