import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addBooks } from 'src/app/search-book/state/book.action';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';
import { AppState } from 'src/app/store/app.state';
import { deleteCartBooksSucess } from '../../state/cart.action';
import { getCartBooks } from '../../state/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartBooks: any;
  constructor(
    private router: Router,
    private fetchBookDetailsService: FetchBookDetailsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.cartBooks = this.store.select(getCartBooks);
    this.fetchBookDetailsService.clearAddedCartBooksCounts();
  }

  onProceedToPurshase(item: any) {
    this.router.navigate(['/billing-details', item.id]);
  }

  onDeleteCartItem(item: any) {
    this.store.dispatch(addBooks({ book: item }));
    this.store.dispatch(deleteCartBooksSucess({ id: item.id }));
  }
}
