import { View, Text } from "react-native";

const RightToMaternity = () => {
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
        A pregnant woman cannot be fired by a corporation, according to the
        Maternity Benefit Act of 1961. A maximum of three years in prison could
        be used as punishment.{"\n"}Employees in the public and private sectors
        are subject to this rule.{" "}
      </Text>
    </View>
  );
};

export default RightToMaternity;
