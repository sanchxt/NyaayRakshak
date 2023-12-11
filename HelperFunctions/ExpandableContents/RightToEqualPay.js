import { View, Text } from "react-native";

const RightToEqualPay = () => {
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
        Equal pay for equally hard labour is required by the Equal Remuneration
        Act of 1976, a piece of legislation.{"\n"}They should receive equal
        compensation if two or more people performed the same task in similar
        situations.
      </Text>
    </View>
  );
};

export default RightToEqualPay;
