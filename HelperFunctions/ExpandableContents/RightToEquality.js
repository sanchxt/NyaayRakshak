import { View, Text } from "react-native";

const RightToEquality = () => {
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
        The Indian Constitution's Right to Equality guarantees equality before
        the law within Indian territory.{"\n"}Anyone and everyone who is on
        Indian soil, including corporations and foreigners as well as citizens
        of India, is subject to this law.
      </Text>
    </View>
  );
};

export default RightToEquality;
