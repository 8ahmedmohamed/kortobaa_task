import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  @Input() heart: number = 0;

  constructor() {}

  ngOnInit(): void {}

  changeFavourite() {
    if(this.heart == 0)
      this.heart = 1;
    else
      this.heart = 0;
  }
}
