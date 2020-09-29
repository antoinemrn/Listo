import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";

function TaskDetails({ route }) {
  const { name, dueDate } = route.params;
  return (
    <View style={styles.container}>
      <MaskedView
        maskElement={
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={styles.overlay}
          />
        }
      >
        <Image source={require("../assets/outdoor.jpg")} style={styles.image} />
      </MaskedView>
      <View style={styles.informations}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{dueDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  informations: {
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    marginTop: -100,
    padding: 20,
  },
  image: {
    marginTop: 0,
    width: "100%",
    height: 400,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  text: {
    color: colors.white,
    fontSize: 22,
    margin: 10,
  },
});

export default TaskDetails;
