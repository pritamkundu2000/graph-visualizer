// import { Action } from '@reduxjs/toolkit';
import { NodeStylingState } from '../../initialNodes';
import { initialNodes } from '../../initialNodes';

const initialStyling: NodeStylingState = {};

// initialNodes.forEach(node => {
//   initialStyling[node.id] = { color: '#ffcc00', fontSize: 16 };
// });

if(initialNodes && initialNodes.length>0){
  initialNodes.forEach(node => {
    initialStyling[node.id] = { color: '#ffcc00', fontSize: 16 };
  });
}

export function nodeStylingReducer(state = initialStyling, action: any): NodeStylingState {
  switch (action.type) {
    case 'NODE_COLOR_CHANGED':
      return {
        ...state,
        [action.payload.nodeId]: {
          ...state[action.payload.nodeId],
          color: action.payload.color,
        },
      }; 
      
    case 'NODE_FONT_SIZE_CHANGED':
      return {
        ...state,
        [action.payload.nodeId]: {
          ...state[action.payload.nodeId],
          fontSize: action.payload.fontSize,
        },
      };
    default:
      return state;
  }
}