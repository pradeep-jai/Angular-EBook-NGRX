import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksAdapter, BooksState } from './book.state';

const getBooksState = createFeatureSelector<BooksState>('books');
export const booksSelectors = booksAdapter.getSelectors();

export const getBooks = createSelector(getBooksState, booksSelectors.selectAll);
