import styled from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 15px;
  padding-top: ${StatusBarHeight + 35}px;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageTitleContainer = styled.View`
  padding-top: 5px;
  padding-left: 7px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: left;
  font-weight: 600;
  color: ${brand};
`;

export const SubTitle = styled.Text`
  font-size: 35px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: 800;
  color: ${tertiary};
  padding-top: 5px;
`;

export const LineBreak = styled.View`
  padding: 10px;

  ${(props) =>
    props.moreGap &&
    `
    padding: 15px;
  `}
`;

export const HealthOptionContainer = styled.View`
  margin-top: 50px;
  width: 100%;
  background-color: #2e5894;
  border-radius: 30px;

  ${(props) =>
    !props.category &&
    `
    padding: 20px;
  `}

  ${(props) =>
    props.category &&
    `
    margin-top: 20px;
    background-color: #212121;
    padding: 0px 20px 35px 20px;
    border-radius: 30px;
    width: 48%;
  `}
`;

export const CaseHeading = styled.Text`
  text-align: center;
  font-size: 22px;
  color: #00ffff;
  font-style: italic;
  font-family: System;
  font-weight: 900;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const CaseProgDate = styled.Text`
  text-align: left;
  font-size: 15px;
  color: #fff;
  font-weight: 600;

  ${(props) =>
    props.heading &&
    `
    font-weight: 800;
    color: #FEFEFA;
  `}
`;

export const CaseProgJudge = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;

  ${(props) =>
    props.heading &&
    `
    color: #f5f5dc;
    font-weight: 800;
  `}
`;

export const LegalHelpText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
`;

export const CategoryTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: left;
  font-family: System;
`;

export const CategoryHeading = styled.Text`
  font-size: 26px;
  color: #e7feff;
`;
