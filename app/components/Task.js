import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../config/colors";

function Task({ name, imageName, dueDate }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{dueDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Task;
