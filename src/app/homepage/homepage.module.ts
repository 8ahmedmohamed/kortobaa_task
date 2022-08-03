import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecentlyproductsComponent } from './components/recentlyproducts/recentlyproducts.component';
import { RecentlyviewedproductsComponent } from './components/recentlyviewedproducts/recentlyviewedproducts.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [
    CarouselComponent,
    RecentlyproductsComponent,
    RecentlyviewedproductsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CarouselComponent,
    RecentlyproductsComponent,
    RecentlyviewedproductsComponent,
    HomeComponent
  ]
})
export class HomepageModule { }
