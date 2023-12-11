// import React from "react";
// import { View, Text } from "react-native";

// const LoginScreen = () => {
//   return (
//     <View>
//       <Text>Login to the app</Text>
//     </View>
//   );
// };

// export default LoginScreen;

// import React, { useState } from "react";
// import { View, Text, TextInput, Button, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const LoginScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigation = useNavigation();

//   const handleSignIn = async () => {
//     try {
//       const ngrokUrl = "https://4178-49-205-43-216.ngrok.io";
//       const response = await fetch(`${ngrokUrl}/authenticate`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const userData = await response.json();
//         console.log("Login successful", userData);
//         navigation.navigate("Home"); // Navigate to the Home screen on successful login
//       } else {
//         const errorMessage = await response.text();
//         console.log("Authentication failed:", errorMessage);
//         Alert.alert("Authentication Failed", errorMessage);
//       }
//     } catch (error) {
//       console.error("Error during authentication:", error.message);
//       Alert.alert("Error", "An error occurred during authentication");
//     }
//   };

//   return (
//     <View>
//       <Text>Login to the app</Text>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <Button title="Sign In" onPress={handleSignIn} />
//     </View>
//   );
// };

// export default LoginScreen;

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

// colors
const { brand, darkLight, primary } = Colors;

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

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
              console.log(values);
              if (values.email && values.password) {
                navigation.navigate("Welcome");
              } else {
                console.log("error: one or more fields are empty");
              }

              setSubmitting(false);
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

                  {/* GOOGLE BUTTON below, to be implemented if there's enough time! */}
                  {/*
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={primary} size={25} />
                  <ButtonText google={true}>Sign In with Google</ButtonText>
                </StyledButton> 
                */}

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
