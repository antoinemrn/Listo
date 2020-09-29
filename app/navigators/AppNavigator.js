import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import Manager from "../screens/Manager";
import Stats from "../screens/Stats";
import DashboardNavigator from "./DashboardNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        labelStyle: styles.label,
      }}
    >
      <Tab.Screen
        name={routes.MANAGER}
        component={Manager}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="folder" size={size} color={color} />
          ),

          title: "Manager",
        }}
      />
      <Tab.Screen
        name={routes.DASHBOARD}
        component={DashboardNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="view-dashboard-variant"
              size={size}
              color={color}
            />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name={routes.STATS}
        component={Stats}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="artstation"
              size={size}
              color={color}
            />
          ),
          title: "Stats",
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 2,
    textTransform: "uppercase",
  },
});
export default AppNavigator;
