import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Task from "../components/Task";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import routes from "../navigators/routes";
import apiTask from "../api/tasks";
import Swipeable from "react-native-gesture-handler/Swipeable";
import IconButton from "../components/IconButton";
import DashboardSelector from "../components/DashboardSelector";
import Screen from "../components/Screen";

function Dashboard({ navigation }) {
  const [isRefreshing, setRefreshing] = useState(false);
  const [needToRefresh, setNeedToRefresh] = useState(false);
  const [dateLimit, setDateLimit] = useState();

  const apiGetTasks = useApi(apiTask.getTasks);
  const apiGetTask = useApi(apiTask.getTask);
  const apiDeleteTask = useApi(apiTask.deleteTask);

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

  const deleteTask = (id) => {
    apiDeleteTask.request(id);
    onRefresh();
    setNeedToRefresh(!needToRefresh);
  };

  const renderLeftActions = (itemId) => {
    return (
      <IconButton
        iconName="delete"
        color={colors.light}
        onPress={() => deleteTask(itemId)}
        size={75}
      />
    );
  };

  const renderTask = ({ item }) => (
    <Swipeable renderLeftActions={() => renderLeftActions(item._id)}>
      <Task
        name={item.name}
        dueDate={item.dueDate}
        iconName="run"
        onPress={() => onTaskPress(item._id)}
      />
    </Swipeable>
  );

  useEffect(() => {
    apiGetTasks.request();
  }, []);

  return (
    <Screen style={styles.container}>
      <DashboardSelector updateDate={setDateLimit} />
      <Text>{dateLimit}</Text>
      <FlatList
        data={apiGetTasks.data}
        renderItem={renderTask}
        keyExtractor={(item) => item._id}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        style={styles.list}
        extraData={needToRefresh}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.back2,
  },
  list: {
    width: "100%",
  },
});

export default Dashboard;
