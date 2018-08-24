import { Component, OnInit } from '@angular/core';

import { WishlistService } from '../../services/wishlist.service';

import { Wish } from '../../models/wish';

@Component({
  selector: 'app-all-wishes',
  templateUrl: './all-wishes.component.html',
  styleUrls: ['./all-wishes.component.scss']
})
export class AllWishesComponent implements OnInit {
  constructor(private wishListService: WishlistService) {}

  public wishes: Wish[];

  ngOnInit() {
    this
      .wishListService
      .getAllWishes()
      .subscribe(res => this.wishes = res);
  }

  deleteWish(wishId: number) {
    this.wishListService.removeWish(wishId);
  }
}
