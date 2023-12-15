import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

import RightToInformation from "./ExpandableContents/RightToInformation";
import RightToEquality from "./ExpandableContents/RightToEquality";
import RightToEducation from "./ExpandableContents/RightToEducation";
import RightToLife from "./ExpandableContents/RightToLife";
import RightToFIR from "./ExpandableContents/RightToFIR";
import RightToRefund from "./ExpandableContents/RightToRefund";
import RightToEqualPay from "./ExpandableContents/RightToEqualPay";
import RightToLegalAid from "./ExpandableContents/RightToLegalAid";
import RightToMaternity from "./ExpandableContents/RightToMaternity";

const HomeYourRightsScreen = () => {
  const [expandInfo, setExpandInfo] = useState(false);
  const [expandEquality, setExpandEquality] = useState(false);
  const [expandEducation, setExpandEducation] = useState(false);
  const [expandLife, setExpandLife] = useState(false);
  const [expandFIR, setExpandFIR] = useState(false);
  const [expandRefund, setExpandRefund] = useState(false);
  const [expandEqualPay, setExpandEqualPay] = useState(false);
  const [expandFreeLegalAid, setExpandFreeLegalAid] = useState(false);
  const [expandMaternityAct, setExpandMaternityAct] = useState(false);

  const handleContainerPress = (container) => {
    setExpandInfo(false);
    setExpandEquality(false);
    setExpandEducation(false);
    setExpandLife(false);
    setExpandFIR(false);
    setExpandRefund(false);
    setExpandEqualPay(false);
    setExpandFreeLegalAid(false);
    setExpandMaternityAct(false);

    switch (container) {
      case "Info":
        setExpandInfo(!expandInfo);
        break;
      case "Equality":
        setExpandEquality(!expandEquality);
        break;
      case "Education":
        setExpandEducation(!expandEducation);
        break;
      case "Life":
        setExpandLife(!expandLife);
        break;
      case "FIR":
        setExpandFIR(!expandFIR);
        break;
      case "Refund":
        setExpandRefund(!expandRefund);
        break;
      case "EqualPay":
        setExpandEqualPay(!expandEqualPay);
        break;
      case "FreeLegalAid":
        setExpandFreeLegalAid(!expandFreeLegalAid);
        break;
      case "MaternityAct":
        setExpandMaternityAct(!expandMaternityAct);
        break;
      default:
        break;
    }
  };

  return (
    <View>
      {/* container 1 - right to info */}
      <TouchableWithoutFeedback onPress={() => handleContainerPress("Info")}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right to Information
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandInfo && <RightToInformation />}

      {/* 2 - equality */}
      <TouchableWithoutFeedback
        onPress={() => handleContainerPress("Equality")}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right to Equality
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandEquality && <RightToEquality />}

      {/* container 3 - edducation */}
      <TouchableWithoutFeedback
        onPress={() => handleContainerPress("Education")}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right to Education
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandEducation && <RightToEducation />}

      {/* container 4 - life */}
      <TouchableWithoutFeedback onPress={() => handleContainerPress("Life")}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right to Life
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandLife && <RightToLife />}

      {/* container 5 - FIR */}
      <TouchableWithoutFeedback onPress={() => handleContainerPress("FIR")}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right to File an FIR
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandFIR && <RightToFIR />}

      {/* Container 6 - refund */}
      <TouchableWithoutFeedback onPress={() => handleContainerPress("Refund")}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right to Claim a Refund
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandRefund && <RightToRefund />}

      {/* container 7 - equal pay */}
      <TouchableWithoutFeedback
        onPress={() => handleContainerPress("EqualPay")}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right to Equal Pay
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandEqualPay && <RightToEqualPay />}

      {/* container 8 - legal aid */}
      <TouchableWithoutFeedback
        onPress={() => handleContainerPress("FreeLegalAid")}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right to Free Legal Aid
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandFreeLegalAid && <RightToLegalAid />}

      {/* container 9 - maternity act */}
      <TouchableWithoutFeedback
        onPress={() => handleContainerPress("MaternityAct")}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: "#FFFAF0", fontWeight: 800 }}>
            Right Under Maternity Act
          </Text>
        </View>
      </TouchableWithoutFeedback>

      {expandMaternityAct && <RightToMaternity />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#2E3894",
    borderRadius: 25,
  },
});

export default HomeYourRightsScreen;
