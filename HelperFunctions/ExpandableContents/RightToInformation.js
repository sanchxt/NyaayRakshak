import { View, Text } from "react-native";

const RightToInformation = () => {
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
        This establishes the right to information as a basic right for all
        Indian people. Passed by the Parliament, it officially took effect on
        October 12, 2005.{"\n"}Any Indian citizen may seek information from any
        public authority under the RTI Act, and the authority is required to
        respond as soon as possible or within thirty days.{"\n"}The information
        must be given within 48 hours if the petitioner's life or freedom are at
        stake.
      </Text>
    </View>
  );
};

export default RightToInformation;
