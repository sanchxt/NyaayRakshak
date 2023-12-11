import { View, Text, ImageBackground } from "react-native";
import React from "react";

export default function GetPremiumDrawer() {
  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Get Premium</Text>
      </View>
    </ImageBackground>
  );
}
