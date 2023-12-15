import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

// for form
import { Formik } from "formik";

// for icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
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
import { View, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

// colors
const { brand, darkLight, primary } = Colors;

const SignupScreen = () => {
  const navigation = useNavigation();

  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const handleSignUp = async (values, setSubmitting) => {
    try {
      // Make sure password and confirmPassword match
      if (values.password !== values.confirmPassword) {
        console.log("Passwords do not match");
        return;
      }

      const response = await axios.post("http://localhost:5555/signup", {
        name: values.fullName,
        email: values.email,
        dateOfBirth: dob,
        password: values.password,
        role: "prisoner", // or "lawyer" based on your logic
        // Additional fields can be added here if needed
      });

      if (response.data.success) {
        console.log("Registration successful");
        navigation.navigate("Welcome");
      } else {
        console.log("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle signupText={true}>NyaayRakshak</PageTitle>
          <SubTitle>Account Sign Up</SubTitle>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              dateOfBirth: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values, { setSubmitting }) =>
              handleSignUp(values, setSubmitting)
            }
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => {
              return (
                <StyledFormArea style={{ width: "90%" }}>
                  <LoginTextInput
                    label="Full Name"
                    icon="person"
                    placeholder="Sanchit Bhalla"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
                    keyboardType="email-address"
                  />

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
                  <LoginTextInput
                    label="Date of Birth"
                    icon="calendar"
                    placeholder="YYYY - MM - DD"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("dateOfBirth")}
                    onBlur={handleBlur("dateOfBirth")}
                    value={dob ? dob.toDateString() : ""}
                    isDate={true}
                    editable={false}
                    showDatePicker={showDatePicker}
                  />

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
                  <LoginTextInput
                    label="Confirm Password"
                    icon="lock"
                    placeholder="* * * * * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />

                  <BreakPaddingTop />
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Sign Up</ButtonText>
                  </StyledButton>

                  <Line />
                  <ExtraView>
                    <ExtraText>Already have an account? </ExtraText>
                    <TextLink>
                      <TextLinkContent
                        onPress={() => navigation.navigate("Login")}
                      >
                        Login
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
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>

      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
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

export default SignupScreen;
