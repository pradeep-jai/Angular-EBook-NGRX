import { createReducer, on } from '@ngrx/store';
import { loadBooksSuccess } from './book.action';
import { booksAdapter, initialState } from './book.state';

const _booksReducer = createReducer(
  initialState,
  on(loadBooksSuccess, (state, action) => {
    return booksAdapter.setAll(action.books, state);
  })
);

export function booksReducer(state, action) {
  return _booksReducer(state, action);
}
