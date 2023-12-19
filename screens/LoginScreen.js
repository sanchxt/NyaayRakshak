import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { apiBaseUrl } from "../apiConfig"; 
import { UserContext } from "../UserContext";
import * as SecureStore from "expo-secure-store";

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

// for form
import { Formik } from "formik";

// for icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  BreakPaddingTop,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "./../components/styles";

const { brand, darkLight } = Colors;

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();
  const { setUserDetails } = useContext(UserContext);

  const handleLogin = async (values, setSubmitting) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/login`, values);

      if (response.data.success) {
        const nameResponse = await axios.get(`${apiBaseUrl}/getname?email=${encodeURIComponent(values.email)}`);
        if (nameResponse.status === 200) {
          const userDetails = { email: values.email, name: nameResponse.data.name };
          console.log(userDetails);
          
          setUserDetails(userDetails);
          
          // Save user details in Secure Storage
          await SecureStore.setItemAsync('userDetails', JSON.stringify(userDetails));

          navigation.navigate("Welcome");
        } 
      } else {
        console.log("Login failed:", response.data.message);
      }
      setSubmitting(false);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log("User not found. Please check your credentials.");
        } else {
          console.error("Server error:", error.response.data.message);
        }
      } else if (error.request) {
        console.error("No response received from the server.");
      } else {
        console.error("Error setting up the request:", error.message);
      }

      setSubmitting(false);
    }
  };


  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("./../assets/img/NyayaRakshak-Logo.png")}
          />
          <PageTitle>NyaayRakshak</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              handleLogin(values, setSubmitting);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => {
              return (
                <StyledFormArea style={{ width: "90%" }}>
                  <BreakPaddingTop />
                  <LoginTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="nyayaforyou@gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />

                  <BreakPaddingTop />
                  <BreakPaddingTop />
                  <LoginTextInput
                    label="Password"
                    icon="lock"
                    placeholder="* * * * * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />

                  <BreakPaddingTop />
                  <MsgBox>. . .</MsgBox>
                  <BreakPaddingTop />

                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>

                  <BreakPaddingTop doubleGap={true} />
                  <BreakPaddingTop doubleGap={true} />
                  <Line />
                  <ExtraView>
                    <ExtraText>Don't have an account yet? </ExtraText>
                    <TextLink>
                      <TextLinkContent
                        onPress={() => navigation.navigate("Signup")}
                      >
                        Sign Up
                      </TextLinkContent>
                    </TextLink>
                  </ExtraView>
                </StyledFormArea>
              );
            }}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const LoginTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default LoginScreen;
