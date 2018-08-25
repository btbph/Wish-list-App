import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


import { WishlistService } from '../../services/wishlist.service';
import { Wish } from '../../models/wish';

@Component({
  selector: 'app-detail-wish',
  templateUrl: './detail-wish.component.html',
  styleUrls: ['./detail-wish.component.scss']
})
export class DetailWishComponent implements OnInit {
  public currentWish: Wish;

  constructor(private wishService: WishlistService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this
      .wishService
      .getWish(id)
      .subscribe(res => this.currentWish = res);
  }

  deleteWish() {
    this.wishService.removeWish(this.currentWish.id);
    this.router.navigate(['/all']);
  }
}
