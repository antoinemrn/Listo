import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../components/Screen";
import Task from "../components/Task";
import colors from "../config/colors";
import routes from "../navigators/routes";

const tasks = [
  {
    id: "1",
    name: "call",
    dueDate: "02/10/2020",
  },
  {
    id: "2",
    name: "run",
    dueDate: "25/11/2020",
  },
  {
    id: "3",
    name: "code",
    dueDate: "26/10/2020",
  },
  {
    id: "4",
    name: "work",
    dueDate: "02/10/2020",
  },
  {
    id: "5",
    name: "eat",
    dueDate: "02/10/2020",
  },
];

function Dashboard({ navigation }) {
  const onTaskPress = () => {
    navigation.navigate(routes.TASK_DETAILS);
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity onPress={onTaskPress}>
      <Task name={item.name} dueDate={item.dueDate} />
    </TouchableOpacity>
  );

  return (
    <Screen style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.list}
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
  list: {
    width: "100%",
  },
});

export default Dashboard;
