import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function TaskDetails(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/outdoor.jpg")} style={styles.image} />
      <View style={styles.informations}>
        <Text>Task details !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },

  image: {
    width: "100%",
    height: 300,
  },
});

export default TaskDetails;
