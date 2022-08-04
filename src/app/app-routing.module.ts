import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homepage/components/home/home.component';
import { AllproductsComponent } from './product/components/allproducts/allproducts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: AllproductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
