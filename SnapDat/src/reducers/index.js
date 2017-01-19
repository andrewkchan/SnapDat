import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

const initialState = {
    captured: false
};

const rootReducer = function(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return { ...state };

        case types.CAPTURE:
            return { ...state, captured: true };

        case types.CLOSE:
            return { ...state, captured: false };

        default:
            return state;
    }
}

export default rootReducer;
