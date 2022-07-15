import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return <NavigationContainer theme={navigationTheme}>
    <AppNavigator/>
  </NavigationContainer>
}
