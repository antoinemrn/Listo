import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../config/colors";

function Task({ name, dueDate }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{dueDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    margin: 5,
    height: 100,
  },
});

export default Task;
