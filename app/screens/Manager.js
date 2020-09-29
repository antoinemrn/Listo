import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import apiStuff from "../api/tasks";

function Manager(props) {
  const [welcomeMessage, setWelcomeMessage] = useState();
  const getMessage = async () => {
    const response = await apiStuff.getTasks();
    console.log(response);
    if (response.ok) {
      console.log(response.data);
      setWelcomeMessage(response.data[0].title);
    } else {
      console.log(
        "Error while getting the data from the server : ",
        response.problem
      );
    }
  };
  return (
    <Screen style={styles.container}>
      <Text>Hello Manager : {welcomeMessage}</Text>
      <Button onPress={getMessage} title="Test" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Manager;
