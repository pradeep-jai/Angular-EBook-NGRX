import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from 'src/app/models/book.model';

export interface CollectionState extends EntityState<Book> {}

export const collectionAdapter = createEntityAdapter<Book>();

export const initialState: CollectionState = collectionAdapter.getInitialState(
  {}
);
