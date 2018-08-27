import { Injectable } from '@angular/core';

import { Wish } from '../models/wish';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public wishes: Wish[] = [
    { id: 1, price: 10, image: 1, title: 'title1' },
    { id: 2, price: 100, image: 2, title: 'title2' },
    { id: 3, price: 1000, image: 3, title: 'title3' },
    { id: 4, price: 10000, image: 4, title: 'title4' }
  ];
}
