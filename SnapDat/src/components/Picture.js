import React, { Component, PropTypes } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import IconI from "react-native-vector-icons/Ionicons";
import PictureBottomBar from "../components/PictureBottomBar";
import PictureTopBar from "../components/PictureTopBar";

import { View, Text, Image, PixelRatio } from "react-native";

const imageStyle = {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "space-between"
};

class Picture extends Component {
    render() {
        return (
            <Image
                source={require("../images/capturedImg.png")}
                style={imageStyle}
            >
                <PictureTopBar {...this.props} />
                <PictureBottomBar {...this.props} />
            </Image>
        );
    }
}

export default Picture;
