import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigators/AppNavigator";
import Dashboard from "./app/screens/Dashboard";
import mainTheme from "./app/navigators/mainTheme";

export default function App() {
  return (
    <NavigationContainer theme={mainTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
