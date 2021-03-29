import { createReducer, on } from '@ngrx/store';
import { addBooks, deleteBookSuccess, loadBooksSuccess } from './book.action';
import { booksAdapter, initialState } from './book.state';

const _booksReducer = createReducer(
  initialState,
  on(addBooks, (state, action) => {
    return booksAdapter.addOne(action.book, state);
  }),
  on(loadBooksSuccess, (state, action) => {
    return booksAdapter.setAll(action.books, state);
  }),
  on(deleteBookSuccess, (state, { id }) => {
    return booksAdapter.removeOne(id, state);
  })
);

export function booksReducer(state, action) {
  return _booksReducer(state, action);
}
