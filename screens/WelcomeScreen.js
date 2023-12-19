import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { apiBaseUrl } from "../apiConfig";
import * as SecureStore from 'expo-secure-store';

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
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loadUserDetails = async () => {
      const userDetailsString = await SecureStore.getItemAsync('userDetails');
      if (userDetailsString) {
        const userDetails = JSON.parse(userDetailsString);
        setUserName(userDetails.name); // Set the user's name
      }
    };

    loadUserDetails();
  }, []);

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
          <SubTitle welcome={true}>{userName}</SubTitle>

          <StyledFormArea style={{ width: "90%" }}>
            <Avatar
              resizeMode="cover"
              source={require("./../assets/img/ProfileImage.jpg")}
            />
            <Line />
            <StyledButton
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <ButtonText>Home</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default WelcomeScreen;
