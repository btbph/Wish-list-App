import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-create-wish',
  templateUrl: './create-wish.component.html',
  styleUrls: ['./create-wish.component.scss']
})
export class CreateWishComponent implements OnInit {

  private image: number = Math.floor(4 * Math.random() + 1);
  private id = 0;

  public wishForm = this.fb.group({
    title: ['', Validators.maxLength(128)],
    about: [''],
    price: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
  });

  constructor(private fb: FormBuilder,
              private wishListService: WishlistService,
              private router: Router) {}

  ngOnInit(): void {
    this.getIdOfWish();
  }

  getIdOfWish(): void {
    this
      .wishListService
      .getCurrentId()
      .subscribe(res => this.id = res);
  }

  onSubmit(): void {
    const { about, price, title } = this.wishForm.getRawValue();
    this.wishListService.addWish({
      id: this.id,
      about,
      price: +price,
      image: this.image,
      title
    });
    this.router.navigate(['/all']);
  }
}
