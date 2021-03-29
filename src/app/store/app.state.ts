import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { cartReducer } from '../cart/state/cart.reducer';
import { CART_STATE_NAME } from '../cart/state/cart.selector';
import { CartState } from '../cart/state/cart.state';
import { COLLECTION_STATE_NAME } from '../my-collections/state/collection.selector';
import { CollectionState } from '../my-collections/state/collection.state';
import { booksReducer } from '../search-book/state/book.reducer';
import { BOOK_STATE_NAME } from '../search-book/state/book.selector';
import { BooksState } from '../search-book/state/book.state';
import { collectionReducer } from '../my-collections/state/collection.reducer';

export interface AppState {
  [BOOK_STATE_NAME]: BooksState;
  [CART_STATE_NAME]: CartState;
  [COLLECTION_STATE_NAME]: CollectionState;
  router: RouterReducerState;
}

export const appReducer = {
  [BOOK_STATE_NAME]: booksReducer,
  [CART_STATE_NAME]: cartReducer,
  [COLLECTION_STATE_NAME]: collectionReducer,
  router: routerReducer,
};
