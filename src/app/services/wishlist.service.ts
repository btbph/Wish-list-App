import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


import { Wish } from '../models/wish';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishSubject: BehaviorSubject<Wish[]> = new BehaviorSubject<Wish[]>(this.sharedService.wishes);

  constructor(private sharedService: SharedService) {}

  getAllWishes(): BehaviorSubject<Wish[]> {
    return this.wishSubject;
  }

  getCurrentId(): Observable<number> {
    return new Observable(observer => {
      observer.next(this.sharedService.wishes[this.sharedService.wishes.length - 1].id + 1);
      observer.complete();
    });
  }

  getWish(wishId): Observable<Wish> {
    return new Observable<Wish>(observer => {
      observer.next(this.sharedService.wishes.find(wish => wish.id === wishId));
      observer.complete();
    });
  }

  addWish(wish: Wish): void {
    this.sharedService.wishes.push(wish);
    this.wishSubject.next(this.sharedService.wishes);
  }

  removeWish(wishId: number): void {
    this.sharedService.wishes = this.sharedService.wishes.filter(wish => wish.id !== wishId);
    this.wishSubject.next(this.sharedService.wishes);
  }
}
