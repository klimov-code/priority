import { Store, createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { InitialStore } from '~/Constants';
import { PriorityReducer } from '~/Reducers';
import { watchPriority } from '~/Sagas';

const configureStore = (initialStore = InitialStore): Store => {
  const composeEnhancers: any =
    process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const rootReducer = combineReducers({ priority: PriorityReducer });

  const store = createStore(
    rootReducer,
    initialStore,
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(watchPriority);

  return store;
};

export { configureStore };
