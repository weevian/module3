import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 1. IMPORT
import { MyMallsComponent } from './my-malls/my-malls.component';
import { MyCustomersComponent } from './my-customers/my-customers.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { DashboardComponent } from './dashboard/dashboard.component'


const routes: Routes = [
// 2. INJECT
  { path: 'my-customers',
  component: MyCustomersComponent
},
{ path: 'my-malls',
  component: MyMallsComponent
},
{ path: 'my-products',
component: MyProductsComponent
},
{ path: '',
component: DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
