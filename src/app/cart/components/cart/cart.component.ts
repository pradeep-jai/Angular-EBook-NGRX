import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartBooks : any;
  constructor(
    private router:Router,
    private fetchBookDetailsService: FetchBookDetailsService 
  ) { }

  ngOnInit(): void {
    this.cartBooks = this.fetchBookDetailsService.getCartBooks()
    this.fetchBookDetailsService.clearAddedCartBooksCounts();
  }

  proceedToPurshase(item : any) {
    this.fetchBookDetailsService.setBookDetails(item)
    this.router.navigateByUrl('dashboard/billing-details');
  }

  deleteCartItem(item : any) {

  }
}
