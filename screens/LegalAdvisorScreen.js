import React, { useState } from "react";
import { View, Text, ImageBackground, ScrollView, StyleSheet, SafeAreaView, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';

import CriminalLawyers from "./Lawyers/CriminalLawyers";
import FamilyLawyers from "./Lawyers/FamilyLawyers";
import CorporateLawyers from "./Lawyers/CorporateLawyers";
import ContractLawyers from "./Lawyers/ContractLawyers";
import CivilLawyers from "./Lawyers/CivilLawyers";

const data = [
  { label: 'All', value: '0'},
  { label: 'Criminal', value: '1' },
  { label: 'Corporate', value: '2' },
  { label: 'Civil', value: '3' },
  { label: 'Contract', value: '4' },
  { label: 'Family', value: '5' },
];

const LegalAdvisorScreen = () => {
  const [value, setValue] = useState(null);

  const renderSelectedComponent = () => {
    switch (value) {
      case '1':
        return <CriminalLawyers />;
      case '2':
        return <CorporateLawyers />;
      case '3':
        return <CivilLawyers />;
      case '4':
        return <ContractLawyers />;
      case '5':
        return <FamilyLawyers />;
      default:
          return (
            <>
              <CriminalLawyers />
              <CorporateLawyers />
              <CivilLawyers />
              <ContractLawyers />
              <FamilyLawyers />
            </>
          );
    }
  };

  return (
    <ImageBackground
      source={require("../assets/img/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
     <ScrollView style={{ flex: 1 }}>
      <View
        style={{
        flexDirection: "column",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop: 35,
      }}
      >
        <Dropdown
          style={styles. dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          )}
        />

        {renderSelectedComponent()}

      </View>
     </ScrollView>

    </ImageBackground>
  );
};

export default LegalAdvisorScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
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
