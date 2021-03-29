import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  addBooksInCart,
  addBooksInCartSuccess,
} from 'src/app/cart/state/cart.action';
import { SideNavComponent } from 'src/app/dashboard/components/side-nav/side-nav.component';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';
import { AppState } from 'src/app/store/app.state';
import { deleteBookSuccess } from '../../state/book.action';
import { getBookById } from '../../state/book.selector';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  bookDetails: any;
  postSubscription: Subscription;
  id: string;
  constructor(
    private router: Router,
    private fetchBookDetailsService: FetchBookDetailsService,
    private SideNavComponent: SideNavComponent,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.select(getBookById).subscribe((book) => {
      if (book) {
        this.bookDetails = book;
        this.id = this.bookDetails.id;
      }
    });
  }

  onAddToCart() {
    // this.fetchBookDetailsService.setCartBooks(this.bookDetails);
    // this.fetchBookDetailsService.setAddedCartBooksCounts();
    // this.router.navigate(['dashboard/search']);
    // this.SideNavComponent.ngOnInit();

    const singleBook = this.bookDetails;
    this.store.dispatch(addBooksInCartSuccess({ book: singleBook }));
    this.store.dispatch(deleteBookSuccess({ id: this.id }));
    this.router.navigate(['dashboard/search']);
  }

  onBuy() {
    // this.router.navigateByUrl('/billing-details');
    this.router.navigate(['/billing-details', this.id]);
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
