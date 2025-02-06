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
});

export const nodeFontSizeChanged = (nodeId: string, fontSize: number) => ({
  type: NODE_FONT_SIZE_CHANGED,
  payload: { nodeId, fontSize },
  meta: { undoable: true },
});

export const nodePositionChanged = (nodeId: string, position: { x: number; y: number }) => ({
  type: NODE_POSITION_CHANGED,
  payload: { nodeId, position },
  meta: { undoable: true },
});

export const nodeSelected = (nodeId: string) => ({
  type: NODE_SELECTED,
  payload: { nodeId },
  meta: { undoable: false },
});