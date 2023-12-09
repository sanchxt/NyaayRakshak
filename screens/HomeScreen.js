import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>welcome to the homescreen</Text>
      <Button title="AI Chatbot" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default HomeScreen;
