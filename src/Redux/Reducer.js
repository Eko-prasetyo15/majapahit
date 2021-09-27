import { combineReducers } from "redux";

const initialState = {
    data: []
}

const datanya = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_DATA_SUCCESS":
            return { ...state, data: action.datas }
        default:
            return state
    }
}

const Reducers = combineReducers({
    datanya
});

export default Reducers;