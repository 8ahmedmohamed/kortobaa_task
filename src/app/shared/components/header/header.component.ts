import { SharedService } from './../../../homepage/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Input() cartCount:number = 0
  cartCount = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.quantitySubj.subscribe((quantity: number) => {
      this.cartCount = quantity;
    });
  }
}
