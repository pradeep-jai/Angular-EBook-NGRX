import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from 'src/app/models/book.model';

export interface CartState extends EntityState<Book> {}

export const cartAdapter = createEntityAdapter<Book>();

export const initialState: CartState = cartAdapter.getInitialState({});
