import React from "react";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to the home screen</Text>
    </View>
  );
};

export default HomeScreen;

// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { SimpleLineIcons } from "@expo/vector-icons";

// import HomeDrawer from "./drawers/HomeDrawer";

// const Drawer = createDrawerNavigator();

// const HomeScreen = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerStyle: {
//           backgroundColor: "#fff",
//           width: 250,
//         },
//         headerStyle: {
//           backgroundColor: "#f4511e",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//         drawerActiveTintColor: "blue",
//         drawerLabelStyle: {
//           color: "#111",
//         },
//       }}
//     >
//       <Drawer.Screen
//         name="HomeDrawer"
//         options={{
//           drawerLabel: "HomeDrawer",
//           title: "Home Drawer",
//           drawerIcon: () => (
//             <SimpleLineIcons name="home" size={20} color="#808080" />
//           ),
//         }}
//         component={HomeDrawer}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default HomeScreen;
