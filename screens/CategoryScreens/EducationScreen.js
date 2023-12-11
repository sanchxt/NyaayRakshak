import React from "react";
import { View, Text, ImageBackground } from "react-native";

const EducationScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Education Screen</Text>
      </View>
    </ImageBackground>
  );
};

export default EducationScreen;
