import { createReducer, on } from '@ngrx/store';
import { addBooksInCollectionSuccess } from './collection.action';
import { collectionAdapter, initialState } from './collection.state';

const _collectionReducer = createReducer(
  initialState,
  on(addBooksInCollectionSuccess, (state, action) => {
    return collectionAdapter.addOne(action.book, state);
  })
);

export function collectionReducer(state, action) {
  return _collectionReducer(state, action);
}
