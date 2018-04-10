import { createSelector } from 'reselect';

const searchFormSelector = (state) => state.ui.searchForm;

const itemsSelector = (state) => state.entities.items;

const searchDomainSelector = (state) => state.search;

const getItems = (items, keys) => keys.map((key) => items[key]);

export const getAllItems = createSelector(
  [searchFormSelector, itemsSelector, searchDomainSelector],
  (searchForm, itemEntities, searchDomain) => (
    {
      ...searchForm,
      items: getItems(itemEntities.byId, searchDomain.items),
    }
  )
)
