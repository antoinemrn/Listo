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
      tabBarOptions={{
        labelStyle: styles.label,
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.DASHBOARD} component={Dashboard} />
      <Stack.Screen name={routes.TASK_DETAILS} component={TaskDetails} />
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
    color: colors.light,
    textTransform: "uppercase",
  },
});

export default DashboardNavigator;
