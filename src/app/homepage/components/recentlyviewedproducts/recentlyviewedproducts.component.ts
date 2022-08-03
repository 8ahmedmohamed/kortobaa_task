import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentlyviewedproducts',
  templateUrl: './recentlyviewedproducts.component.html',
  styleUrls: ['./recentlyviewedproducts.component.css']
})
export class RecentlyviewedproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productArray = [
    {
      id:6,
      img: "../../../../assets/images/pic-6.png",
      title: "تيشيرت-كم طويل-آرت وير-نسائي-ملابس",
      description: "تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس",
      price: 190,
      qnt: 0,
      favourite: false
    },
    {
      id:4,
      img: "../../../../assets/images/pic-4.png",
      title: "تيشيرت-كم طويل-آرت وير-نسائي-ملابس",
      description: "تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس",
      price: 230,
      qnt: 0,
      favourite: false
    },
    {
      id:5,
      img: "../../../../assets/images/pic-5.png",
      title: "تيشيرت-كم طويل-آرت وير-نسائي-ملابس",
      description: "تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس",
      price: 150,
      qnt: 0,
      favourite: false
    }

  ];

}
