import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import routes from "./routes";
import TaskDetails from "../screens/TaskDetails";
import AddTask from "../screens/AddTask";
import appStyle from "../config/styles";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { NONE } from "apisauce";

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: colors.lightGrey,
        headerTitleStyle: [appStyle.title, styles.headerTitleStyle],
        headerRight: () => <View />,
      }}
    >
      <Stack.Screen
        name={routes.DASHBOARD}
        component={Dashboard}
        options={{ title: "Dashboard", headerLeft: () => <View /> }}
      />
      <Stack.Screen
        name={routes.TASK_DETAILS}
        component={TaskDetails}
        options={{ title: "" }}
      />
      <Stack.Screen
        name={routes.ADD_TASK}
        component={AddTask}
        options={{ title: "Add a new task !" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    alignSelf: "center",
    padding: 0,
    color: colors.lightGrey,
  },
});

export default DashboardNavigator;
