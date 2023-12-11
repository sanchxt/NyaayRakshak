import React from "react";
import { View, Text, ImageBackground } from "react-native";

const HealthScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Health Screen</Text>
      </View>
    </ImageBackground>
  );
};

export default HealthScreen;
