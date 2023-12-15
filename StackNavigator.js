import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image } from "react-native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import NotificationScreen from "./screens/NotificationScreen";
import LegalAdvisorScreen from "./screens/LegalAdvisorScreen";

import RateAppDrawer from "./screens/drawers/RateAppDrawer";
import CategoriesDrawer from "./screens/drawers/CategoriesDrawer";
import CustomizeDrawer from "./screens/drawers/CustomizeDrawer";
import SettingsDrawer from "./screens/drawers/SettingsDrawer";
import GetPremiumDrawer from "./screens/drawers/GetPremiumDrawer";
import AIChatDrawer from "./screens/drawers/AIChatDrawer";

import HealthScreen from "./screens/CategoryScreens/HealthScreen";
import EducationScreen from "./screens/CategoryScreens/EducationScreen";
import DocumentScreen from "./screens/CategoryScreens/DocumentScreen";
import ComplaintScreen from "./screens/CategoryScreens/ComplaintScreen";

import { Line, Colors } from "./components/styles";

const { tertiary } = Colors;
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator
    initialRouteName="DrawerHome"
    screenOptions={{ headerShown: false }}
    drawerContent={(props) => {
      return (
        <SafeAreaView>
          <View
            style={{
              height: 200,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#f4f4f4",
              borderBottomWidth: 1,
            }}
          >
            <Image
              source={require("./assets/img/ProfileImage.jpg")}
              style={{
                height: 130,
                width: 130,
                borderRadius: 65,
              }}
            />
            <Text
              style={{
                fontSize: 22,
                marginVertical: 6,
                fontWeight: "bold",
                color: "#111",
              }}
            >
              Sanchit Bhalla
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#111",
              }}
            >
              Lawyer
            </Text>
            <Line drawer={true} />
          </View>

          <DrawerItemList {...props} />
        </SafeAreaView>
      );
    }}
  >
    <Drawer.Screen
      name="HomeDrawer"
      component={HomeScreen}
      options={{
        drawerLabel: "Home Page",
        title: "Home",
        drawerIcon: () => (
          <SimpleLineIcons name="home" size={20} color="#808080" />
        ),
      }}
    />
    <Drawer.Screen
      name="CategoriesDrawer"
      component={CategoriesDrawer}
      options={{
        drawerLabel: "Categories",
        title: "Categories",
        drawerIcon: () => (
          <MaterialIcons name="category" size={20} color="#808080" />
        ),
      }}
    />
    <Drawer.Screen
      name="CustomizeDrawer"
      component={CustomizeDrawer}
      options={{
        drawerLabel: "Customize",
        title: "Customize",
        drawerIcon: () => (
          <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
        ),
      }}
    />
    <Drawer.Screen
      name="SettingsDrawer"
      component={SettingsDrawer}
      options={{
        drawerLabel: "Settings",
        title: "Settings",
        drawerIcon: () => (
          <MaterialIcons name="settings" size={20} color="#808080" />
        ),
      }}
    />
    <Drawer.Screen
      name="RateAppDrawer"
      component={RateAppDrawer}
      options={{
        drawerLabel: "Rate Our App",
        title: "Rate App",
        drawerIcon: () => <FontAwesome name="star" size={20} color="#808080" />,
      }}
    />
    <Drawer.Screen
      name="GetPremiumDrawer"
      component={GetPremiumDrawer}
      options={{
        drawerLabel: "Get Premium",
        title: "Get Premium",
        drawerIcon: () => (
          <MaterialCommunityIcons
            name="certificate"
            size={20}
            color="#808080"
          />
        ),
      }}
    />
    <Drawer.Screen
      name="AIChatDrawer"
      component={AIChatDrawer}
      options={{
        drawerLabel: "Chat with AI",
        title: "Chat with AI",
        drawerIcon: () => (
          <MaterialCommunityIcons name="chat-plus" size={20} color="#808080" />
        ),
      }}
    />
  </Drawer.Navigator>
);

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeNavigator} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="LegalAdvisor" component={LegalAdvisorScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
        <Stack.Screen name="Document" component={DocumentScreen} />
        <Stack.Screen name="Complaint" component={ComplaintScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

// OLD - SAVED FOR LATER REFERENCE:

//<Stack.Navigator
// screenOptions={{
//   headerStyled: {
//     backgroundColor: "transparent",
//   },
//   headerTintColor: tertiary,
//   headerTransparent: true,
//   headerTitle: "",
//   headerLeftContainerStyle: {
//     paddingLeft: 20,
//   },
// }}

// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";
// import ChatScreen from "./screens/ChatScreen";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import useAuth from "./hooks/useAuth";

// const Stack = createNativeStackNavigator();

// const StackNavigator = () => {
//   const { user } = useAuth();
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {user ? (
//         <>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Chat" component={ChatScreen} />
//         </>
//       ) : (
//         <>
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Signup" component={SignupScreen} />
//           <Stack.Screen name="Welcome" component={WelcomeScreen} />
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Chat" component={ChatScreen} />
//         </>
//       )}
//     </Stack.Navigator>
//   );
// };

// export default StackNavigator;
