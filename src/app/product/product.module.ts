import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllproductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AllproductsComponent
  ]
})
export class ProductModule { }
