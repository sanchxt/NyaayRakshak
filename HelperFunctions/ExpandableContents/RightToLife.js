import { View, Text } from "react-native";

const RightToLife = () => {
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
        According to Article 21, no one, not even the government, has the right
        to take your life. Under passing laws to protect you, the government is
        required by this law to take the necessary steps to protect life.{"\n"}
        This also requires the government to protect you if your life is in
        danger by taking the necessary measures.{"\n"}When making decisions that
        could put you in risk or have an impact on your life expectancy, public
        authorities should also take into account your right to life.{"\n"}You
        can be entitled to an investigation if a family member passes away due
        to state involvement.
      </Text>
    </View>
  );
};

export default RightToLife;
