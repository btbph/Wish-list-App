import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


import { Wish } from '../models/wish';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishes: Wish[] = [
    { id: 1, price: 10, image: 1 },
    { id: 2, price: 100, image: 2 },
    { id: 3, price: 1000, image: 3 },
    { id: 4, price: 10000, image: 4 }
  ];

  private wishSubject: BehaviorSubject<Wish[]> = new BehaviorSubject<Wish[]>(this.wishes);

  getAllWishes(): BehaviorSubject<Wish[]> {
    return this.wishSubject;
  }

  addWish(wish: Wish): void {
    this.wishes.push(wish);
    this.wishSubject.next(this.wishes);
  }

  removeWish(wishId: number) {
    this.wishes = this.wishes.filter(wish => wish.id !== wishId);
    this.wishSubject.next(this.wishes);
  }
}
