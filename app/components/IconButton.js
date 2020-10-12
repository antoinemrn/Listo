import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function IconButton({
  iconName,
  iconColor = colors.white,
  color = colors.primary,
  onPress,
  size,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: color,
          width: size,
          height: size,
          borderRadius: size / 4,
        },
      ]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={size / 2}
        color={iconColor}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
    marginLeft: 10,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default IconButton;
