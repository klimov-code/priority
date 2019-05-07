import { fromJS } from 'immutable';

const InitialStore = {
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

export { InitialStore };
