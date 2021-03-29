import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';

export const ADD_BOOKS_INTO_COLLECTION_ACTION =
  '[billing details page] add books into my collection';
export const ADD_BOOKS_INTO_COLLECTION_ACTION_SUCCESS =
  '[billing details page] add books into my collection success';

export const addBooksInCollection = createAction(
  ADD_BOOKS_INTO_COLLECTION_ACTION,
  props<{ book: Book }>()
);

export const addBooksInCollectionSuccess = createAction(
  ADD_BOOKS_INTO_COLLECTION_ACTION_SUCCESS,
  props<{ book: Book }>()
);
