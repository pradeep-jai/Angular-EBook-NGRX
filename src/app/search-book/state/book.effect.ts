import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import { BooksService } from 'src/app/shared/services/books/books.service';
import { loadBooks, loadBooksSuccess } from './book.action';
import { BooksState } from './book.state';

@Injectable()
export class BooksEffects {
  constructor(
    private action$: Actions,
    private store: Store<BooksState>,
    private bookService: BooksService
  ) {}

  loadBooks$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadBooks),
      mergeMap((action) => {
        return this.bookService.getBooks(action.bookName).pipe(
          map((books) => {
            return loadBooksSuccess({ books });
          })
        );
      })
    );
  });
}
