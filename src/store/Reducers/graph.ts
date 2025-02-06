import { Node, Edge } from '../../initialNodes';
import { initialNodes, initialEdges } from '../../initialNodes';

export interface GraphState {
  nodes: Node[];
  edges: Edge[];
}

const initialState: GraphState = {
  nodes: initialNodes,
  edges: initialEdges,
};

export function graphReducer(state = initialState, action: any): GraphState {
  switch (action.type) {
    case 'NODE_POSITION_CHANGED':
      return {
        ...state,
        nodes: state.nodes.map(node =>
          node.id === action.payload.nodeId
            ? { ...node, position: action.payload.position }
            : node
        ),
      };
    default:
      return state;
  }
}