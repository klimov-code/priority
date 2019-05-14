import { Map, fromJS } from 'immutable';

import { IPriority } from 'Definitions';
import { actions } from 'Actions';
import { reorderList, getIndex, getParentIndex } from 'Utils';

const PriorityReducer = (store: Map<string, any> = null, action: any) => {
  const lastUpdate = Date.now();

  switch (action.type) {
    case actions.FETCH_REQUEST:
    case actions.CREATE_REQUEST:
    case actions.UPDATE_REQUEST:
    case actions.REORDER_REQUEST:
    case actions.ARCHIVE_REQUEST:
    case actions.RESTORE_REQUEST:
      return store.set('isFetching', true);

    case actions.FETCH_FAILURE:
    case actions.CREATE_FAILURE:
    case actions.UPDATE_FAILURE:
    case actions.REORDER_FAILURE:
    case actions.ARCHIVE_FAILURE:
    case actions.RESTORE_FAILURE:
      return store.set('isFetching', false).set('error', fromJS(action.error));

    case actions.REORDER_LIST: {
      const { startIndex, endIndex, parentIndex } = action.payload;

      const keyPath = parentIndex
        ? ['data', 'active', parentIndex, 'subpriorities']
        : ['data', 'active'];

      const list = store.getIn(keyPath);
      const reordered = reorderList(list, startIndex, endIndex);

      return store.updateIn(keyPath, () => reordered);
    }

    case actions.UPDATE_PRIORITY: {
      const priority: IPriority = action.payload;
      const priorityIndex = getIndex(store, priority);

      return store.mergeIn(['data', 'active', ...priorityIndex], fromJS(action.payload));
    }

    case actions.FETCH_SUCCESS:
    case actions.REORDER_SUCCESS:
      return store
        .set('isFetching', false)
        .set('lastUpdate', lastUpdate)
        .set('error', '')
        .set('data', fromJS(action.payload));

    case actions.CREATE_SUCCESS: {
      const priority: IPriority = action.payload;
      const parentIndex = getParentIndex(store, priority);

      const keyPath = parentIndex
        ? ['data', 'active', parentIndex, 'subpriorities']
        : ['data', 'active'];

      return store.updateIn(keyPath, priorities => priorities.concat(action.payload));
    }

    case actions.UPDATE_SUCCESS: {
      const priority: IPriority = action.payload;
      const priorityIndex = getIndex(store, priority);

      return store
        .set('isFetching', false)
        .set('lastUpdate', lastUpdate)
        .set('error', '')
        .updateIn(['data', 'active', ...priorityIndex], () => action.payload);
    }

    case actions.ARCHIVE_SUCCESS:
    case actions.RESTORE_SUCCESS:
      return store
        .set('isFetching', false)
        .set('lastUpdate', lastUpdate)
        .set('error', '');

    default:
      return store;
  }
};

export { PriorityReducer };
