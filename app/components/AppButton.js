import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({
  title,
  color = colors.primary,
  onPress,
  width,
  textColor = colors.black,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color, width: width }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
