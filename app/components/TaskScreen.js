import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";

function TaskScreen({ children, styleContainer }) {
  return (
    <ImageBackground
      source={require("../assets/background_task.jpg")}
      style={styles.image}
      blurRadius={10}
    >
      <View style={styles.overlay} pointerEvents="none" />
      <Screen style={[styleContainer, styles.container]}>{children}</Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
    opacity: 0.8,
  },
});

export default TaskScreen;
