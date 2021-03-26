import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from 'src/app/models/book.model';

export interface BooksState extends EntityState<Book> {}

export const booksAdapter = createEntityAdapter<Book>();

export const initialState: BooksState = booksAdapter.getInitialState({});
