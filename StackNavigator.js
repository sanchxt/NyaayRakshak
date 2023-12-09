import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import RateAppDrawer from "./screens/drawers/RateAppDrawer";
import { Colors } from "./components/styles";

const { tertiary } = Colors;
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator
    initialRouteName="DrawerHome"
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
    <Drawer.Screen name="RateApp" component={RateAppDrawer} />
  </Drawer.Navigator>
);

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerTintColor: tertiary,
            headerShown: true,
            headerTitle: "Home",
            headerLeft: null,
          }}
        />
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
