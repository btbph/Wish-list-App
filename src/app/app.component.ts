import {Component, OnInit} from '@angular/core';

import { WishlistService } from './services/wishlist.service';

import { Wish } from './models/wish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private wishListService: WishlistService) {}

  public wishes: Wish[];

  ngOnInit() {
    this
      .wishListService
      .getAllWishes()
      .subscribe(res => this.wishes = res);
  }
}
