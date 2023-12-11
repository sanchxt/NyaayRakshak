import { View, Text } from "react-native";

const RightToLegalAid = () => {
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
        The government passed this law in accordance with Article 39-A of the
        Indian Constitution to offer free legal aid to anyone who cannot afford
        to hire an attorney.
      </Text>
    </View>
  );
};

export default RightToLegalAid;
