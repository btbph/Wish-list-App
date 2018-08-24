import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { Wish } from '../models/wish';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  getAllWishes(): Observable<Wish[]> {
    return this.http.get<Wish[]>('api/wishes');
  }
}
