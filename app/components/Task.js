import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../config/colors";
import appStyle from "../config/styles";

function Task({ name, dueDate }) {
  return (
    <View style={styles.container}>
      <Text style={appStyle.title}>{name}</Text>
      <Text>{dueDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary + "70",
    margin: 5,
    height: 100,
    padding: 10,
  },
});

export default Task;
