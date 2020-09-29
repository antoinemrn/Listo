import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { color } from "react-native-reanimated";
import Screen from "../components/Screen";
import Task from "../components/Task";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import routes from "../navigators/routes";
import apiTask from "../api/tasks";
import AppButton from "../components/AppButton";
import TaskScreen from "../components/TaskScreen";

function Dashboard({ navigation }) {
  const [isRefreshing, setRefreshing] = useState(false);

  const apiGetTasks = useApi(apiTask.getTasks);
  const apiGetTask = useApi(apiTask.getTask);

  const addTaskPress = () => {
    navigation.navigate(routes.ADD_TASK);
  };

  const onTaskPress = async (id) => {
    const response = await apiGetTask.request(id);
    if (response.ok) {
      navigation.navigate(routes.TASK_DETAILS, {
        name: response.data.name,
        dueDate: response.data.dueDate,
      });
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    apiGetTasks.request();
    setRefreshing(false);
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity onPress={() => onTaskPress(item._id)}>
      <Task name={item.name} dueDate={item.dueDate} />
    </TouchableOpacity>
  );

  useEffect(() => {
    apiGetTasks.request();
  }, []);

  return (
    <TaskScreen styleContainer={styles.container}>
      <FlatList
        data={apiGetTasks.data}
        renderItem={renderTask}
        keyExtractor={(item) => item._id}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        style={styles.list}
      />
      <AppButton
        onPress={addTaskPress}
        title="Add a task"
        color={colors.primary}
      />
    </TaskScreen>
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
