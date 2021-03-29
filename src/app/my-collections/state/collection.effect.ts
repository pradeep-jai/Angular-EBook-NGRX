import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/models/book.model';
import { AppState } from 'src/app/store/app.state';
import {
  addBooksInCollection,
  addBooksInCollectionSuccess,
} from './collection.action';

@Injectable()
export class CollectionEffects {
  constructor(private actions$: Actions, private store: Store<AppState>) {}

  addBooksInCollection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addBooksInCollection),
      map((action) => {
        const book: Book = action.book;

        return addBooksInCollectionSuccess({ book });
      })
    );
  });
}
