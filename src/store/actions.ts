// import { ActionType } from 'typesafe-actions';

export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const NODE_COLOR_CHANGED = 'NODE_COLOR_CHANGED';
export const NODE_FONT_SIZE_CHANGED = 'NODE_FONT_SIZE_CHANGED';
export const NODE_POSITION_CHANGED = 'NODE_POSITION_CHANGED';
export const NODE_SELECTED = 'NODE_SELECTED';

export const undo = () => ({ type: UNDO });
export const redo = () => ({ type: REDO });

export const nodeColorChanged = (nodeId: string, color: string) => ({
  type: NODE_COLOR_CHANGED,
  payload: { nodeId, color },
  meta: { undoable: true },
} as const);

export const nodeFontSizeChanged = (nodeId: string, fontSize: number) => ({
  type: NODE_FONT_SIZE_CHANGED,
  payload: { nodeId, fontSize },
  meta: { undoable: true },
});

export const nodePositionChanged = (nodeId: string, position: { x: number; y: number }) => ({
  type: NODE_POSITION_CHANGED,
  payload: { nodeId, position },
  meta: { undoable: true },
} as const);

export const nodeSelected = (nodeId: string | null) => ({
  type: NODE_SELECTED,
  // payload: { nodeId },
  payload:  nodeId ,
  meta: { undoable: false },
});

export type Action =
  | ReturnType<typeof undo>
  | ReturnType<typeof redo>
  | ReturnType<typeof nodeColorChanged>
  | ReturnType<typeof nodeFontSizeChanged>
  | ReturnType<typeof nodePositionChanged>
  | ReturnType<typeof nodeSelected>;




// const rootAction = {
//   undo,
//   redo,
//   nodeColorChanged,
//   nodeFontSizeChanged,
//   nodePositionChanged,
//   nodeSelected
// } as const;

// export type Action = ActionType<typeof rootAction>;