import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[colors.light, colors.dark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <MaterialCommunityIcons name="plus" color={colors.primary} size={30} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 35,
    overflow: "hidden",
    bottom: 35,
    height: 70,
    width: 70,
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default NewListingButton;
