import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';



@NgModule({
  declarations: [
    AllproductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AllproductsComponent
  ]
})
export class ProductModule { }
