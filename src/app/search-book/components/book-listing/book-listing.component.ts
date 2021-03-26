import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/shared/services/books/books.service';
import { FetchBookDetailsService } from 'src/app/shared/services/fetch-book-details/fetch-book-details.service';
import { loadBooks } from '../../state/book.action';
import { getBooks } from '../../state/book.selector';
import { BooksState } from '../../state/book.state';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.scss'],
})
export class BookListingComponent implements OnInit {
  first_key = true;
  books: Observable<Book[]>;
  constructor(
    private router: Router,
    private fetchBookDetailsService: FetchBookDetailsService,
    private bookService: BooksService,
    private store: Store<BooksState>
  ) {}

  ngOnInit(): void {
    this.books = this.store.select(getBooks);
  }

  defaultElevation = 2;
  raisedElevation = 8;

  searchBooks(value: string) {
    this.store.dispatch(loadBooks({ bookName: value }));
    this.books = this.store.select(getBooks);
    // this.bookService.search(value).subscribe((results) => {
    //   this.books = results.filter((x) => x.volumeInfo.description);
    // });

    // // console.log(this.books);
    // console.log('sssssssssssssssvvvvvvvvvvvvvvvvvvvvv');
    // console.log(value);
  }

  navigate(item) {
    this.fetchBookDetailsService.setBookDetails(item);
    this.router.navigate(['dashboard/book-details']);
  }
}
