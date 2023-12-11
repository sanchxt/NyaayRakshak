import { View, Text } from "react-native";

const RightToEducation = () => {
  return (
    <View
      style={{
        marginTop: 10,
        padding: 15,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: "#4C4C4C",
        borderRadius: 25,
      }}
    >
      <Text style={{ color: "#FFFAF0", fontWeight: 800 }}>
        Every child between the ages of 6 and 14 has the fundamental right to
        access an education.{"\n"}According to this rule, all private schools
        must reserve 25 percent of their seats for students (to be reimbursed by
        the state).{"\n"}Additionally, it forbids any unrecognised schools from
        operating, and it stipulates that there will be no donation or
        capitation fees, as well as no parent or child interviews for
        admittance.{"\n"}The Act also states that until the end of elementary
        school, no kid shall be held back, expelled, or compelled to pass a
        board exam.
      </Text>
    </View>
  );
};

export default RightToEducation;
