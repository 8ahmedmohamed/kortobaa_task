import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RatingComponent } from './components/rating/rating.component';
import { FavouriteComponent } from './components/favourite/favourite.component';



@NgModule({
  declarations: [
    HeaderComponent,
    RatingComponent,
    FavouriteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    RatingComponent,
    FavouriteComponent
  ]
})
export class SharedModule { }
