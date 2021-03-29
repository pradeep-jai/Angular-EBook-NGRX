import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/store/router/custom-serializer';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import { cartAdapter, CartState } from './cart.state';

export const CART_STATE_NAME = 'cartBooks';
const getCartState = createFeatureSelector<CartState>(CART_STATE_NAME);
export const cartSelectors = cartAdapter.getSelectors();

export const getCartBooks = createSelector(
  getCartState,
  cartSelectors.selectAll
);

export const getCartEntities = createSelector(
  getCartState,
  cartSelectors.selectEntities
);
export const getCartBookById = createSelector(
  getCartEntities,
  getCurrentRoute,
  (books, route: RouterStateUrl) => {
    return books ? books[route.params['id']] : null;
  }
);
