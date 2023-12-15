import { View, Text, TouchableHighlight, Linking } from "react-native";
import { LineBreak } from "../../../components/HealthStyles";

const HealthBooks = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

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
      <TouchableHighlight
        onPress={() =>
          openLink(
            "https://drive.google.com/file/d/1lXFOPOaXmiDHA4yGVdoTx0TpvcUi_F8V/view"
          )
        }
        underlayColor="#4c4c4c"
      >
        <Text
          style={{
            color: "#fff",
            textDecorationLine: "underline",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Look After Your Mental Health Using Exercise
        </Text>
      </TouchableHighlight>

      <LineBreak />
      <TouchableHighlight
        onPress={() =>
          openLink(
            "https://drive.google.com/file/d/1RYyz0-e3vhGowKIviLdZxLpkTjP_JPB7/view"
          )
        }
        underlayColor="#4c4c4c"
      >
        <Text
          style={{
            color: "#fff",
            textDecorationLine: "underline",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Mental Health Problems Among Adolescents
        </Text>
      </TouchableHighlight>

      <LineBreak />
      <TouchableHighlight
        onPress={() =>
          openLink(
            "https://drive.google.com/file/d/1aoTz66dj0Auuf7wei4x55tXN3O_wgJgM/view"
          )
        }
        underlayColor="#4c4c4c"
      >
        <Text
          style={{
            color: "#fff",
            textDecorationLine: "underline",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Dance and Health
        </Text>
      </TouchableHighlight>

      <LineBreak />
      <TouchableHighlight
        onPress={() =>
          openLink(
            "https://drive.google.com/file/d/1stWQoxMQxiJIskZVnNSoHfGdkSvAoAKr/view"
          )
        }
        underlayColor="#4c4c4c"
      >
        <Text
          style={{
            color: "#fff",
            textDecorationLine: "underline",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Understanding Mental Health Problems
        </Text>
      </TouchableHighlight>

      <LineBreak />
      <TouchableHighlight
        onPress={() =>
          openLink(
            "https://drive.google.com/file/d/141Il8RYqVKd43CMND3Q_-wtf-Uu3o54z/view"
          )
        }
        underlayColor="#4c4c4c"
      >
        <Text
          style={{
            color: "#fff",
            textDecorationLine: "underline",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Mental Illnesses Signs & Symptoms
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default HealthBooks;
