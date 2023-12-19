import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

import HealthBooks from "../../HelperFunctions/ExpandableContents/HealthContents/HealthBooks";
import PersonalityTest from "../../HelperFunctions/ExpandableContents/HealthContents/PersonalityTest";
import MeditationSteps from "../../HelperFunctions/ExpandableContents/HealthContents/MeditationSteps";

import { StyledContainer } from "../../components/HealthStyles";

const HomeYourRightsScreen = () => {
  const [healthBook, setHealthBook] = useState(false);
  const [personalityTest, setPersonalityTest] = useState(false);
  const [meditationSteps, setMeditationSteps] = useState(false);

  const handleContainerPress = (container) => {
    setHealthBook(false);
    setPersonalityTest(false);
    setMeditationSteps(false);

    switch (container) {
      case "Book":
        setHealthBook(!healthBook);
        break;
      case "Personality":
        setPersonalityTest(!personalityTest);
        break;
      case "Meditation":
        setMeditationSteps(!meditationSteps);
        break;
      default:
        break;
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <StyledContainer>
          <View>
            {/* container 1 - health books */}
            <TouchableWithoutFeedback
              onPress={() => handleContainerPress("Book")}
            >
              <View style={styles.container}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FFFAF0",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  Books on Mental Health
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {healthBook && <HealthBooks />}

            {/* container 2 - personality test */}
            <TouchableWithoutFeedback
              onPress={() => handleContainerPress("Personality")}
            >
              <View style={styles.container}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FFFAF0",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  Myers-Briggs Personality Test
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {personalityTest && <PersonalityTest />}

            {/* container 3 - meditation */}
            <TouchableWithoutFeedback
              onPress={() => handleContainerPress("Meditation")}
            >
              <View style={styles.container}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#FFFAF0",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  Learn Meditation - A Way of Life
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {meditationSteps && <MeditationSteps />}

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../../assets/img/mental-health.png")} // Replace with your image path
                style={styles.yourImageStyle} // Define yourImageStyle in your StyleSheet
              />
            </View>

          </View>


        </StyledContainer>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    padding: 45,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#2E3894",
    borderRadius: 35,
  },
  yourImageStyle: {
    width: "60%", // Adjust width as needed
    height: 250, // Adjust height as needed
    resizeMode: "cover", // or 'contain', depending on your preference
  },
});

export default HomeYourRightsScreen;
