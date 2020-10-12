import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

function TaskDetails({ route }) {
  const { name, dueDate } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="run" size={200} color={colors.primary} />
      </View>
      <View style={styles.informations} elevation={10}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{dueDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  iconContainer: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: colors.primary,
  },
  informations: {
    backgroundColor: colors.secondary,
    width: "90%",
    height: "100%",
    alignSelf: "center",
    padding: 20,
  },
  text: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 22,
    margin: 10,
  },
});

export default TaskDetails;
