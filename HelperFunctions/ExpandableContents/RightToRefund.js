import { View, Text } from "react-native";

const RightToRefund = () => {
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
        Every consumer is entitled to a full refund under the terms of the
        Consumer Protection Act of 1986 if they are dissatisfied with their
        purchase or are unable to use the services they have paid for.{"\n"}In
        truth, printing "No exchange or refund" on bills and invoices is against
        the law and constitutes an unfair business conduct.
      </Text>
    </View>
  );
};

export default RightToRefund;
