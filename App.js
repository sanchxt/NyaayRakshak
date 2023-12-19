import React from "react";
import StackNavigator from "./StackNavigator";
import AIChatDrawer from "./screens/drawers/AIChatDrawer";
import { UserProvider } from "./UserContext";
// import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <UserProvider>
      <StackNavigator />
    </UserProvider>
  );
}
