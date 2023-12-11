import React from "react";
import { View, Text, ImageBackground } from "react-native";

const DocumentScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Document Screen</Text>
      </View>
    </ImageBackground>
  );
};

export default DocumentScreen;
