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

export function receiveCapturedImage(image) {
    console.log("Receiving captured image data");
    return {
        type: types.RECEIVE_CAPTURED_IMAGE,
        image
    };
}

export function close() {
    console.log("closing");
    return {
        type: types.CLOSE
    };
}
