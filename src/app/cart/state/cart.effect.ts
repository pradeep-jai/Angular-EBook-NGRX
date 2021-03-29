import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/models/book.model';
import { AppState } from 'src/app/store/app.state';
import { addBooksInCart, addBooksInCartSuccess } from './cart.action';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private store: Store<AppState>) {}

  addBooksInCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addBooksInCart),
      map((action) => {
        const book: Book = action.book;

        return addBooksInCartSuccess({ book });
      })
    );
  });
}
