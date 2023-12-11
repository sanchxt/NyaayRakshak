import { View, Text } from "react-native";

const RightToFIR = () => {
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
        A police officer is not permitted to decline to file a FIR, as stated in
        Indian Penal Code 166 A. A police officer who declines to submit a FIR
        for a cognizable violation is subject to punishment under Section
        166A(c) of the Indian Penal Code if they are an Indian citizen. The
        police officer in these situations "will be responsible for prosecution
        and punishment," according to the Supreme Court.{"\n\n"}
        <Text
          style={{ fontWeight: "bold", fontStyle: "italic", color: "#fff" }}
        >
          How should I use this right?
        </Text>{" "}
        Visit a police station and provide the officer in charge of that area
        all the information you have. Additionally, the informant has the option
        of providing information verbally or in writing.
      </Text>
    </View>
  );
};

export default RightToFIR;
