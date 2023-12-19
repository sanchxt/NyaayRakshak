import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import {
  CaseProgContainer,
  LineBreak,
  CaseHeading,
  CaseProgDate,
  DateContainer,
  CaseProgJudge,
} from "../../components/homeStyles";

const CriminalLawyers = () => {
    return (
        <CaseProgContainer>
          <View style={styles.caseHeadingContainer}>
            <CaseHeading>Criminal Lawyer</CaseHeading>
            <Image 
              source={require("../../assets/img/Lawyers/lawyer-1.jpg")} // Replace with your image path
              style={styles.caseHeadingImage}
            />
          </View>
          <LineBreak moreGap={true} />
          <DateContainer>
            <CaseProgDate heading={true}>Name:</CaseProgDate>
            <CaseProgDate>Fali Sam Nariman</CaseProgDate>
          </DateContainer>

          <LineBreak />
          <DateContainer>
            <CaseProgDate heading={true}>Bar Council No.:</CaseProgDate>
            <CaseProgDate>UP12345/12</CaseProgDate>
          </DateContainer>

          <LineBreak />
          <DateContainer>
            <CaseProgJudge heading={true}>Email:</CaseProgJudge>
            <CaseProgJudge>samfali@gmail.com</CaseProgJudge>
          </DateContainer>
        </CaseProgContainer>
    );
};

export default CriminalLawyers;

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
  