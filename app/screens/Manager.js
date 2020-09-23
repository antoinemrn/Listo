import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function Manager(props) {
  return (
    <View style={styles.container}>
      <Text>Hello Manager !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Manager;
