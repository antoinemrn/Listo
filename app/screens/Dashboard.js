import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import Task from "../components/Task";
import colors from "../config/colors";

const tasks = [
  {
    id: "1",
    name: "call",
    imageName: "",
    dueDate: "02/10/2020",
  },
  {
    id: "2",
    name: "run",
    imageName: "",
    dueDate: "25/11/2020",
  },
  {
    id: "3",
    name: "code",
    imageName: "",
    dueDate: "26/10/2020",
  },
  {
    id: "4",
    name: "work",
    imageName: "",
    dueDate: "02/10/2020",
  },
  {
    id: "5",
    name: "eat",
    imageName: "",
    dueDate: "02/10/2020",
  },
];

function Dashboard(props) {
  const renderTask = ({ item }) => (
    <Task name={item.name} dueDate={item.dueDate} />
  );

  return (
    <Screen style={styles.container}>
      <Text>Dashboard !</Text>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
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

export default Dashboard;
