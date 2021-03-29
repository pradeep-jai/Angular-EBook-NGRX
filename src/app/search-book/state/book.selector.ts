import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/store/router/custom-serializer';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import { booksAdapter, BooksState } from './book.state';
export const BOOK_STATE_NAME = 'books';

const getBooksState = createFeatureSelector<BooksState>(BOOK_STATE_NAME);
export const booksSelectors = booksAdapter.getSelectors();

export const getBooks = createSelector(getBooksState, booksSelectors.selectAll);

export const getBookEntities = createSelector(
  getBooksState,
  booksSelectors.selectEntities
);

export const getBookById = createSelector(
  getBookEntities,
  getCurrentRoute,
  (books, route: RouterStateUrl) => {
    return books ? books[route.params['id']] : null;
  }
);
