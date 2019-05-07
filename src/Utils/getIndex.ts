import { Map } from 'immutable';

import { IPriority } from 'Definitions';
import { getParentIndex } from './getParentIndex';

const getIndex = (store: Map<string, any>, priority: IPriority): Array<number | string> => {
  if (priority.parentId) {
    const parentIndex = getParentIndex(store, priority);

    const index = store
      .getIn(['data', 'active', parentIndex, 'subpriorities'])
      .findIndex(
        (imPriority: Map<string, Partial<IPriority>>) => imPriority.get('id') === priority.id
      );

    return [parentIndex, 'subpriorities', index];
  }

  const index = store
    .getIn(['data', 'active'])
    .findIndex(
      (imPriority: Map<string, Partial<IPriority>>) => imPriority.get('id') === priority.id
    );

  return [index];
};

export { getIndex };
