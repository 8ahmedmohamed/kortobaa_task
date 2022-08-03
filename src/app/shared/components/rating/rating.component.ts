import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() stars: number = 0;

  constructor() {}

  ngOnInit(): void {}

  changeRating(newStars:number){
    this.stars=newStars
  }
}
