import { ActionType } from '../action-types';
import { Middleware } from './middleware';
import bundler from '../../bundler';

let timer: any;

export const bundleMiddleware: Middleware = ({
  getState,
  dispatch,
}) => next => action => {
  next(action);
  if (action.type !== ActionType.UPDATE_CELL) return;

  const {
    cells: { data: cellData },
  } = getState();
  const cell = cellData[action.payload.id];

  if (cell.type === 'text') return;

  clearTimeout(timer);
  timer = setTimeout(async () => {
    console.log('Starting bundlins');
    const result = await bundler(action.payload.content);
    dispatch({
      type: ActionType.BUNDLE_CREATED,
      payload: {
        cellId: action.payload.id,
        bundle: result,
      },
    });
    console.log('Dispatch bundled create');
  }, 750);
};
