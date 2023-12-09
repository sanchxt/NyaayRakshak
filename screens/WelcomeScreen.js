import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from "./../components/styles";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <StatusBar style="auto" backgroundColor="#000000" hidden={true} />
      <InnerContainer>
        <WelcomeImage
          resizeMode="cover"
          source={require("./../assets/img/lol.png")}
        />

        <WelcomeContainer style={{ backgroundColor: "#ffffff" }}>
          <PageTitle welcome={true}>Welcome,</PageTitle>
          <SubTitle welcome={true}>Sanchit Bhalla</SubTitle>

          <StyledFormArea style={{ width: "90%" }}>
            <Avatar
              resizeMode="cover"
              source={require("./../assets/img/ProfileImage.jpg")}
            />

            <Line />
            <StyledButton
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default WelcomeScreen;
