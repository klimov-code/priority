import { fromJS } from 'immutable';

const INITIAL_STORE = {
  priority: fromJS({
    isFetching: false,
    lastUpdate: null,
    error: '',
    data: {
      active: null,
      archive: null,
    },
  }),
};

export { INITIAL_STORE };
