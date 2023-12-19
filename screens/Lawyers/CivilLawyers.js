import React from "react";
import { View, StyleSheet, Image } from "react-native";

import {
  CaseProgContainer,
  LineBreak,
  CaseHeading,
  CaseProgDate,
  DateContainer,
  CaseProgJudge,
} from "../../components/homeStyles";

const CivilLawyers = () => {
    return (
        <CaseProgContainer>
            <View style={styles.caseHeadingContainer}>
              <CaseHeading>Civil Lawyer</CaseHeading>
              <Image 
                source={require("../../assets/img/Lawyers/lawyer-5.jpg")} // Replace with your image path
                style={styles.caseHeadingImage}
              />
            </View>
          <LineBreak moreGap={true} />
          <DateContainer>
            <CaseProgDate heading={true}>Name:</CaseProgDate>
            <CaseProgDate>Abhijeet Singh</CaseProgDate>
          </DateContainer>

          <LineBreak />
          <DateContainer>
            <CaseProgDate heading={true}>Bar Council No.:</CaseProgDate>
            <CaseProgDate>PB22345/07</CaseProgDate>
          </DateContainer>

          <LineBreak />
          <DateContainer>
            <CaseProgJudge heading={true}>Email:</CaseProgJudge>
            <CaseProgJudge>singh.abhijeet@gmail.com</CaseProgJudge>
          </DateContainer>
        </CaseProgContainer>
    );
};

export default CivilLawyers;

const styles = StyleSheet.create({
    caseHeadingContainer: {
      flexDirection: 'row', // Align items in a row
      alignItems: 'center', // Center items vertically
      justifyContent: 'space-between', // Space between items
    },
    caseHeadingImage: {
      width: 65,
      height: 65,
      marginLeft: 10, // Adjust as needed for spacing
      borderRadius: 34,
      borderWidth: 3, // Adjust the border width as needed
      borderColor: 'rgba(124, 255, 200, 1)', // Adjust the border color and opacity for the glow effect
      backgroundColor: 'transparent',
    },
  });
  