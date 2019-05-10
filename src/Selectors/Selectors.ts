import { createSelector } from 'reselect';
import { Map } from 'immutable';

import { IPriority, IValueLabel, IStore } from '~/Definitions';

const getActivePriority: (store: IStore) => IPriority[] = createSelector(
  [
    (store: IStore) =>
      store.priority.hasIn(['data', 'active'])
        ? store.priority.getIn(['data', 'active'])
        : undefined,
  ],
  (imActive: Map<string, any>) => (imActive ? (imActive.toJS() as IPriority[]) : [])
);

const getArchivePriority: (store: IStore) => IPriority[] = createSelector(
  [
    (store: IStore) =>
      store.priority.hasIn(['data', 'archive'])
        ? store.priority.getIn(['data', 'archive'])
        : undefined,
  ],
  (imArchive: Map<string, any>) => (imArchive ? (imArchive.toJS() as IPriority[]) : [])
);

const getActivePriorityList: (store: IStore) => IValueLabel[] = createSelector(
  [getActivePriority],
  active =>
    active.map(priority => ({
      color: priority.color,
      label: priority.name,
      value: priority.id,
    }))
);

export { getActivePriority, getArchivePriority, getActivePriorityList };
