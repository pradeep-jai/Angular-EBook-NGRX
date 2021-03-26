import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';

export const LOAD_BOOKS = '[books page] load books';
export const LOAD_BOOKS_SUCCESS = '[books page] load books success';

export const loadBooks = createAction(
  LOAD_BOOKS,
  props<{ bookName: string }>()
);

export const loadBooksSuccess = createAction(
  LOAD_BOOKS_SUCCESS,
  props<{ books: Book[] }>()
);
