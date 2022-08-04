import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentlyproducts',
  templateUrl: './recentlyproducts.component.html',
  styleUrls: ['./recentlyproducts.component.css'],
})
export class RecentlyproductsComponent implements OnInit {
  cartCount: number = 0;
  addbutton: boolean = false;
  sum = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  productArray = [
    {
      id: 0,
      img: '../../../../assets/images/pic.png',
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      description:
        'تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 200,
      qnt: 0,
      favourite: false,
    },
    {
      id: 1,
      img: '../../../../assets/images/pic-1.png',
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      description:
        'تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 120,
      qnt: 0,
      favourite: false,
    },
    {
      id: 2,
      img: '../../../../assets/images/pic-2.png',
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      description:
        'تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 4000,
      qnt: 0,
      favourite: false,
    },
    {
      id: 3,
      img: '../../../../assets/images/pic-3.png',
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      description:
        'تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 5500,
      qnt: 0,
      favourite: false,
    },
    {
      id: 4,
      img: '../../../../assets/images/pic-4.png',
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      description:
        'تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 230,
      qnt: 0,
      favourite: false,
    },
    {
      id: 5,
      img: '../../../../assets/images/pic-5.png',
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      description:
        'تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 150,
      qnt: 0,
      favourite: false,
    },
    {
      id: 6,
      img: '../../../../assets/images/pic-6.png',
      title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      description:
        'تيشيرت-كم طويل-آرت وير-نسائي-ملابس تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      price: 190,
      qnt: 0,
      favourite: false,
    },
  ];

  addToCart(quantity: any, id: any) {
    if (quantity < 5) {
      quantity++;
      this.productArray[id].qnt = quantity;
      this.sum++;
      this.sharedService.quantitySubj.next(this.sum);
    }
  }

  removeFromCart(quantity: any, id: any) {
    if (quantity > 0) {
      quantity--;
      this.productArray[id].qnt = quantity;
      this.sum--;
      this.sharedService.quantitySubj.next(this.sum);
    }
  }

  toggleCart(quantity: any, id: any) {
    // this.addbutton = true;
    quantity++;
    this.productArray[id].qnt = quantity;
    this.sum++;
    this.sharedService.quantitySubj.next(this.sum);
  }
}

//
