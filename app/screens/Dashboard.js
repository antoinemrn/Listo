import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <Text>Hello Dashboard !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dashboard;
