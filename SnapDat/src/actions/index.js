import * as types from "../constants/ActionTypes";

export function login() {
    return {
        type: types.LOGIN
    };
}

export function capture() {
    console.log("capturing");
    return {
        type: types.CAPTURE
    };
}

export function close() {
    console.log("closing");
    return {
        type: types.CLOSE
    };
}
