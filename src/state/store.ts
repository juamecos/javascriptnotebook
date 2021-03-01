import { bundleMiddleware } from './middlewares/bundler-middleware';
import { ActionType } from './action-types/index';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(bundleMiddleware as any, thunk)
); // 'as any' because otherwyse there is an error, typescript through redux does not recognice this as a middleware

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});
store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});
store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});
store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});
