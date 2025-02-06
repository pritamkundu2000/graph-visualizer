import { Action } from "../actions";
import { nodeSelected } from "../actions";

export interface UIState{
    selectedNodeId: string | null;
}

const initialState: UIState = {
    selectedNodeId: null,
};

export function uiReducer(state = initialState, action: Action): UIState {
    switch (action.type) {
        case 'NODE_SELECTED':{
            const NodeSelectedAction = action as ReturnType<typeof nodeSelected>
            return {
                ...state,
                selectedNodeId: NodeSelectedAction.payload,
            };
        }
        default:
            return state;
    }
}