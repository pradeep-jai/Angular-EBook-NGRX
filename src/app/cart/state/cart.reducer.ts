import { createReducer, on } from '@ngrx/store';
import { addBooksInCartSuccess, deleteCartBooksSucess } from './cart.action';
import { cartAdapter, initialState } from './cart.state';

const _cartReducer = createReducer(
  initialState,
  on(addBooksInCartSuccess, (state, action) => {
    return cartAdapter.addOne(action.book, state);
  }),
  on(deleteCartBooksSucess, (state, { id }) => {
    return cartAdapter.removeOne(id, state);
  })
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}
