import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS } from "../actions/index";

const initialState = {
    smurfName: "",
    error: "",
    isFetching: false
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START: 
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfName: action.payload,
                error:"",
                isFetching: false
            }
        default: return state;
    }
};

export default reducer;