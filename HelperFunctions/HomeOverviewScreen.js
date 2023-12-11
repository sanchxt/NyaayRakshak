import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";
import HomeAnimation from "./HomeAnimation";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import {
  CaseProgContainer,
  LineBreak,
  CaseHeading,
  CaseProgDate,
  DateContainer,
  CaseProgJudge,
  LegalHelpText,
  CategoryTitle,
  CategoryHeading,
} from "../components/homeStyles";
import { useNavigation } from "@react-navigation/native";

const HomeOverviewScreen = () => {
  const { titleStyle } = HomeAnimation();
  const navigation = useNavigation();
  return (
    <>
      <CaseProgContainer>
        <CaseHeading>Case Timeline</CaseHeading>
        <LineBreak moreGap={true} />
        <DateContainer>
          <CaseProgDate heading={true}>Upcoming Hearing:</CaseProgDate>
          <CaseProgDate>December 13, 2024</CaseProgDate>
        </DateContainer>

        <LineBreak />
        <DateContainer>
          <CaseProgDate heading={true}>Previous Hearing:</CaseProgDate>
          <CaseProgDate>December 13, 2022</CaseProgDate>
        </DateContainer>

        <LineBreak />
        <DateContainer>
          <CaseProgJudge heading={true}>Current Judge:</CaseProgJudge>
          <CaseProgJudge>Bhupendra Jogi</CaseProgJudge>
        </DateContainer>
      </CaseProgContainer>

      <CaseProgContainer>
        <LegalHelpText>Want to connect to a Legal Advisor?</LegalHelpText>

        <TouchableOpacity
          onPress={() => navigation.navigate("LegalAdvisor")}
          style={{ alignItems: "center" }}
        >
          <Text style={{ color: "skyblue", fontSize: 17, paddingTop: 5 }}>
            Connect Me
          </Text>
        </TouchableOpacity>
      </CaseProgContainer>

      <LineBreak moreGap={true} />
      <Animated.Text style={titleStyle}>
        <CategoryHeading>Categories</CategoryHeading>
      </Animated.Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Health")}>
          <CaseProgContainer category={true}>
            <LineBreak />
            <MaterialIcons
              name="healing"
              size={20}
              color="#b2ffff"
              style={{ marginTop: -10, paddingBottom: 10 }}
            />
            <CategoryTitle>Health</CategoryTitle>
          </CaseProgContainer>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Education")}
        >
          <CaseProgContainer category={true}>
            <LineBreak />
            <MaterialCommunityIcons
              name="book-education"
              size={20}
              color="#b2ffff"
              style={{ marginTop: -10, paddingBottom: 10 }}
            />
            <CategoryTitle>Education</CategoryTitle>
          </CaseProgContainer>
        </TouchableWithoutFeedback>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Document")}
        >
          <CaseProgContainer category={true}>
            <LineBreak />
            <Ionicons
              name="document"
              size={20}
              color="#b2ffff"
              style={{ marginTop: -10, paddingBottom: 10 }}
            />
            <CategoryTitle>Documents</CategoryTitle>
          </CaseProgContainer>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Complaint")}
        >
          <CaseProgContainer category={true}>
            <LineBreak />
            <MaterialIcons
              name="feedback"
              size={20}
              color="#b2ffff"
              style={{ marginTop: -10, paddingBottom: 10 }}
            />
            <CategoryTitle>Complaints</CategoryTitle>
          </CaseProgContainer>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default HomeOverviewScreen;
