import { Map } from 'immutable';

import { IPriority } from '~/Definitions';

const getParentIndex = (store: Map<string, any>, priority: IPriority): number | undefined => {
  if (priority.parentId) {
    const parentIndex = store
      .getIn(['data', 'active'])
      .findIndex(
        (imPriority: Map<string, Partial<IPriority>>) => imPriority.get('id') === priority.parentId
      );

    return parentIndex;
  }

  return undefined;
};

export { getParentIndex };
