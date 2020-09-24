import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import routes from "./routes";
import TaskDetails from "../screens/TaskDetails";
import AddTask from "../screens/AddTask";

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.DASHBOARD} component={Dashboard} />
      <Stack.Screen name={routes.TASK_DETAILS} component={TaskDetails} />
      <Stack.Screen
        name={routes.ADD_TASK}
        component={AddTask}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
