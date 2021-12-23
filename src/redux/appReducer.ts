import { HIDE_LOADER, SHOW_LOADER } from "./types";

const initialState = {
    loading: false

}
type Action = {
    type: string,
    payload: object,
};

export const appReducer = (state = initialState, action: Action)=>{
    switch(action.type) {
        case SHOW_LOADER:
          return {...state, loading: true};
        case HIDE_LOADER:  
          return {...state, loading: false};
        default: return state;
    }
}