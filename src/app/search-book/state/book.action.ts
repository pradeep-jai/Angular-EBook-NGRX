import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';

export const ADD_ONE_BOOKS = '[books page] add one books';
export const LOAD_BOOKS = '[books page] load books';
export const LOAD_BOOKS_SUCCESS = '[books page] load books success';
export const DELETE_BOOK_ACTION_SUCCESS = '[book page] delete book success';

export const addBooks = createAction(ADD_ONE_BOOKS, props<{ book: Book }>());

export const loadBooks = createAction(
  LOAD_BOOKS,
  props<{ bookName: string }>()
);

export const loadBooksSuccess = createAction(
  LOAD_BOOKS_SUCCESS,
  props<{ books: Book[] }>()
);

export const deleteBookSuccess = createAction(
  DELETE_BOOK_ACTION_SUCCESS,
  props<{ id: string }>()
);
