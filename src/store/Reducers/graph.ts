// import { Node, Edge } from '../../initialNodes';
import { initialNodes, initialEdges } from '../../initialNodes';
import { CustomNode,CustomEdge } from '../../initialNodes';
import {Action, nodePositionChanged} from "../actions"

// export interface GraphState {
//   nodes: Node[];
//   edges: Edge[];
// }
export interface GraphState {
  nodes: CustomNode[];
  edges: CustomEdge[];
}

const initialState: GraphState = {
  nodes: initialNodes,
  edges: initialEdges,
};


export function graphReducer(state = initialState, action: Action): GraphState {
  switch (action.type) {
    case 'NODE_POSITION_CHANGED':{
      const positionAction = action as ReturnType<typeof nodePositionChanged>
      return {
        ...state,
        nodes: state.nodes.map(node =>
          node.id === positionAction.payload.nodeId
            ? { ...node, position: positionAction.payload.position }
            : node
        ),
      }
    }
    default:
      return state;
  }
}