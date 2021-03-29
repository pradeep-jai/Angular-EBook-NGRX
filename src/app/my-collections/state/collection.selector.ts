import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/store/router/custom-serializer';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import { collectionAdapter, CollectionState } from './collection.state';

export const COLLECTION_STATE_NAME = 'collectionBooks';
const getCollectionState = createFeatureSelector<CollectionState>(
  COLLECTION_STATE_NAME
);
export const collectionSelectors = collectionAdapter.getSelectors();

export const getCollectionBooks = createSelector(
  getCollectionState,
  collectionSelectors.selectAll
);
