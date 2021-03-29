import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';
import { NgForm } from '@angular/forms';
import { SideNavComponent } from 'src/app/dashboard/components/side-nav/side-nav.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getBookById } from '../../state/book.selector';
import {
  addBooksInCollection,
  addBooksInCollectionSuccess,
} from 'src/app/my-collections/state/collection.action';
import { deleteBookSuccess } from '../../state/book.action';
import { deleteCartBooksSucess } from 'src/app/cart/state/cart.action';
import { getCartBookById } from '../../../cart/state/cart.selector';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss'],
})
export class BillingDetailsComponent implements OnInit {
  bookDetails: any;

  constructor(
    private fetchBookDetailsService: FetchBookDetailsService,
    private dialog: MatDialog,
    private sideNavbar: SideNavComponent,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(getBookById).subscribe((book) => {
      if (book) {
        this.bookDetails = book;
      }
    });
    if (!this.bookDetails) {
      this.store.select(getCartBookById).subscribe((book) => {
        if (book) {
          this.bookDetails = book;
        }
      });
    }
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done',
        },
      },
    });
  }

  onSubmit(form: NgForm) {
    // this.bookDetails.submitteKey = true;
    const form_input = {
      ...this.bookDetails,
      ...form.value,
    };
    // this.fetchBookDetailsService.setSubmitedBookDetails(form_input);
    // this.fetchBookDetailsService.setSubmitedBooksCounts();
    // this.openAlertDialog();
    // this.sideNavbar.ngOnInit();
    const single_book = this.bookDetails;
    this.store.dispatch(addBooksInCollectionSuccess({ book: form_input }));
    if (single_book) {
      this.store.dispatch(deleteBookSuccess({ id: single_book.id }));
    }

    this.store.dispatch(deleteCartBooksSucess({ id: single_book.id }));
    this.openAlertDialog();
  }
}
