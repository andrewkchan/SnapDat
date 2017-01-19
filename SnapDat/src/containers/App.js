import React, { Component, PropTypes } from "react";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

const store = configureStore(undefined);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
