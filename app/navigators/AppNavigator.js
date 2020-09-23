import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import routes from "./routes";
import Manager from "../screens/Manager";
import Stats from "../screens/Stats";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.MANAGER} component={Manager} />
      <Tab.Screen name={routes.DASHBOARD} component={Dashboard} />
      <Tab.Screen name={routes.STATS} component={Stats} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
