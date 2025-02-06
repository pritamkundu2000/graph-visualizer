export interface UIState{
    selectedNodeId: string | null;
}

const initialState: UIState = {
    selectedNodeId: null,
};

export function uiReducer(state = initialState, action: any): UIState {
    switch (action.type) {
        case 'NODE_SELECTED':
            return {
                ...state,
                selectedNodeId: action.payload,
            };
        default:
            return state;
    }
}