import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { WebSocket } from "react-native-websocket";

export default function AIChatDrawer() {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket("ws://192.168.0.101:3001"); // Replace with your Node.js server IP
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const handleSend = (newMessages = []) => {
    const userMessage = newMessages[0];
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, userMessage)
    );

    if (socket) {
      socket.send(userMessage.text);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const aiMessage = {
          _id: new Date().getTime(),
          text: event.data,
          createdAt: new Date(),
          user: { _id: 2, name: "JusAssist" },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, aiMessage)
        );
      };
    }
  }, [socket]);

  return (
    <ImageBackground
      source={require("../../assets/img/background.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#F5F5F5",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 1,
            marginTop: 40,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            JusAssist
          </Text>
        </View>

        <GiftedChat
          messages={messages}
          onSend={(newMessages) => handleSend(newMessages)}
          user={{ _id: 1 }}
        />
      </View>
    </ImageBackground>
  );
}

// import { View, Text, ImageBackground } from "react-native";
// import React, { useState } from "react";
// import { GiftedChat } from "react-native-gifted-chat";

// export default function AIChatDrawer() {
//   const [messages, setMessages] = useState([]);

//   const handleSend = (newMessages = []) => {
//     const userMessage = newMessages[0];
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, userMessage)
//     );
//   };

//   return (
//     <ImageBackground
//       source={require("../../assets/img/background.png")}
//       style={{ width: "100%", height: "100%" }}
//     >
//       <View style={{ flex: 1 }}>
//         <View
//           style={{
//             backgroundColor: "#F5F5F5",
//             padding: 10,
//             alignItems: "center",
//             justifyContent: "center",
//             borderBottomWidth: 1,
//             marginTop: 40,
//             marginBottom: 5,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 32,
//               fontWeight: "bold",
//             }}
//           >
//             JusAssist
//           </Text>
//         </View>

//         <GiftedChat
//           messages={messages}
//           onSend={(newMessages) => handleSend(newMessages)}
//           user={{ _id: 1 }}
//         />
//       </View>
//     </ImageBackground>
//   );
// }
