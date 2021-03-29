import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';

export const ADD_BOOKS_INTO_CART_ACTION =
  '[book details page] add books into cart';
export const ADD_BOOKS_INTO_CART_ACTION_SUCCESS =
  '[book details page] add books into cart success';

export const DELETE_CART_BOOK_ACTION_SUCCESS =
  '[[book details page] delete cart book sucess';

export const addBooksInCart = createAction(
  ADD_BOOKS_INTO_CART_ACTION,
  props<{ book: Book }>()
);

export const addBooksInCartSuccess = createAction(
  ADD_BOOKS_INTO_CART_ACTION_SUCCESS,
  props<{ book: Book }>()
);

export const deleteCartBooksSucess = createAction(
  DELETE_CART_BOOK_ACTION_SUCCESS,
  props<{ id: string }>()
);
