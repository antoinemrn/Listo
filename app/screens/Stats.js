import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function Stats(props) {
  return (
    <Screen style={styles.container}>
      <Text>Hello Stats !</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Stats;
