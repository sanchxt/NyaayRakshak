import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import getCurrentTime from "../HelperFunctions/CurrentTime";
import Animated from "react-native-reanimated";
import HomeAnimation from "../HelperFunctions/HomeAnimation";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  StyledContainer,
  PageTitleContainer,
  PageTitle,
  SubTitle,
  CaseProgContainer,
  LineBreak,
  CaseHeading,
  CaseProgDate,
  DateContainer,
  CaseProgJudge,
  LegalHelpText,
  CategoryTitle,
  CategoryHeading,
} from "./../components/homeStyles";
import HomeOverviewScreen from "../HelperFunctions/HomeOverviewScreen";
import HomeYourRightsScreen from "../HelperFunctions/HomeYourRightsScreen";

const HomeScreen = () => {
  const timeOfDay = getCurrentTime();
  const { titleStyle } = HomeAnimation();
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ImageBackground
      source={require("../assets/img/background.png")}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <StyledContainer>
          <LineBreak />
          <PageTitleContainer>
            {/* menu and bell buttons */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
              }}
            >
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialIcons name="menu" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}
              >
                <Feather name="bell" size={30} color="black" />
              </TouchableOpacity>
            </View>

            <Animated.Text style={titleStyle}>
              <PageTitle>{timeOfDay}</PageTitle>
            </Animated.Text>

            <Animated.Text style={titleStyle}>
              <SubTitle>Sanchit Bhalla</SubTitle>
            </Animated.Text>
          </PageTitleContainer>

          {/* tab buttons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              position: "relative",
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => handleTabPress("Overview")}
            >
              <View
                style={{
                  marginTop: 15,
                  padding: 15,
                  paddingLeft: 25,
                  paddingRight: 25,
                  backgroundColor:
                    activeTab === "Overview" ? "#2E5894" : "#444",
                  borderRadius: 25,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: activeTab === "Overview" ? "#FFFAF0" : "#fff",
                    fontWeight: activeTab === "Overview" ? 800 : 400,
                  }}
                >
                  Overview
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => handleTabPress("Your Rights")}
            >
              <View
                style={{
                  marginTop: 15,
                  padding: 15,
                  paddingLeft: 25,
                  paddingRight: 25,
                  backgroundColor:
                    activeTab === "Your Rights" ? "#2E5894" : "#444",
                  borderRadius: 25,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: activeTab === "Your Rights" ? "#FFFAF0" : "#fff",
                    fontWeight: activeTab === "Your Rights" ? 800 : 400,
                  }}
                >
                  Your Rights
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          {activeTab === "Overview" && <HomeOverviewScreen />}
          {activeTab === "Your Rights" && <HomeYourRightsScreen />}
        </StyledContainer>

        <LineBreak moreGap={true} />
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
