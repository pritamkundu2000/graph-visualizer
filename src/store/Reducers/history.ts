import { combineReducers } from 'redux';
import { graphReducer, GraphState } from './graph';
import { nodeStylingReducer } from './nodeStyling';
import { NodeStylingState } from '../../initialNodes';
import { uiReducer, UIState } from './ui';
import { Action } from '../actions';


export interface AppState {
  graph: GraphState;
  nodeStyling: NodeStylingState;
  ui:UIState;
}

const appReducer = combineReducers({
  graph: graphReducer,
  nodeStyling: nodeStylingReducer,
  ui: uiReducer
});

export interface HistoryState {
  past: AppState[];
  present: AppState;
  future: AppState[];
}

const initialState: HistoryState = {
  past: [],
  present: appReducer(undefined, { type: '@@INIT' }),
  future: [],
};

export function rootReducer(state: HistoryState = initialState, action: Action): HistoryState {
  switch (action.type) {
    case 'UNDO': {
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);
      const newFuture = [state.present, ...state.future];
      return { past: newPast, present: previous, future: newFuture };
    }
    case 'REDO': {
      if (state.future.length === 0) return state;
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      const newPast = [...state.past, state.present];
      return { past: newPast, present: next, future: newFuture };
    }
    default: {
      const isUndoable = action.meta?.undoable;
      const newPresent = appReducer(state.present, action);
      if (isUndoable) {
        return { past: [...state.past, state.present], present: newPresent, future: [] };
      }
      return { ...state, present: newPresent };
    }
  }
}