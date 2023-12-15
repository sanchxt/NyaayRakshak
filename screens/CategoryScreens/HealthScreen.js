import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageBackground,
  ScrollView,
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
});

export default HomeYourRightsScreen;

// import React from "react";
// import {
//   View,
//   ImageBackground,
//   TouchableWithoutFeedback,
//   ScrollView,
// } from "react-native";

// import {
//   StyledContainer,
//   HealthOptionContainer,
//   LineBreak,
//   CategoryTitle,
// } from "../../components/HealthStyles";

// const HomeScreen = () => {
//   return (
//     <ImageBackground
//       source={require("../../assets/img/background.png")}
//       style={{ flex: 1 }}
//     >
//       <ScrollView style={{ flex: 1 }}>
//         <StyledContainer>
//           <View
//             style={{ flexDirection: "column", justifyContent: "space-between" }}
//           >
//             <TouchableWithoutFeedback>
//               <HealthOptionContainer category={true}>
//                 <CategoryTitle>hey</CategoryTitle>
//               </HealthOptionContainer>
//             </TouchableWithoutFeedback>

//             <TouchableWithoutFeedback>
//               <HealthOptionContainer category={true}>
//                 <CategoryTitle>lol</CategoryTitle>
//               </HealthOptionContainer>
//             </TouchableWithoutFeedback>
//           </View>
//           {/* <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <TouchableWithoutFeedback>
//               <HealthOptionContainer category={true}>
//                 <LineBreak />
//                 <MaterialIcons
//                   name="healing"
//                   size={20}
//                   color="#b2ffff"
//                   style={{ marginTop: -10, paddingBottom: 10 }}
//                 />
//                 <CategoryTitle>Health</CategoryTitle>
//               </HealthOptionContainer>
//             </TouchableWithoutFeedback>

//             <TouchableWithoutFeedback>
//               <HealthOptionContainer category={true}>
//                 <LineBreak />
//                 <MaterialCommunityIcons
//                   name="book-education"
//                   size={20}
//                   color="#b2ffff"
//                   style={{ marginTop: -10, paddingBottom: 10 }}
//                 />
//                 <CategoryTitle>Education</CategoryTitle>
//               </HealthOptionContainer>
//             </TouchableWithoutFeedback>
//           </View>

//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <TouchableWithoutFeedback>
//               <HealthOptionContainer category={true}>
//                 <LineBreak />
//                 <Ionicons
//                   name="document"
//                   size={20}
//                   color="#b2ffff"
//                   style={{ marginTop: -10, paddingBottom: 10 }}
//                 />
//                 <CategoryTitle>Documents</CategoryTitle>
//               </HealthOptionContainer>
//             </TouchableWithoutFeedback>

//             <TouchableWithoutFeedback>
//               <HealthOptionContainer category={true}>
//                 <LineBreak />
//                 <MaterialIcons
//                   name="feedback"
//                   size={20}
//                   color="#b2ffff"
//                   style={{ marginTop: -10, paddingBottom: 10 }}
//                 />
//                 <CategoryTitle>Complaints</CategoryTitle>
//               </HealthOptionContainer>
//             </TouchableWithoutFeedback>
//           </View> */}
//         </StyledContainer>

//         <LineBreak moreGap={true} />
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// export default HomeScreen;
