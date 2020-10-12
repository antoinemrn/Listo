import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import Manager from "../screens/Manager";
import Stats from "../screens/Stats";
import DashboardNavigator from "./DashboardNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../config/colors";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import AddTask from "../screens/AddTask";
import NewListingButton from "./NewListingButton";
import ParametersScreen from "../screens/ParametersScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.light,
        showLabel: false,
        style: styles.tabStyle,
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
        name={routes.ADD_TASK}
        component={AddTask}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.ADD_TASK)}
            />
          ),
        })}
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
      <Tab.Screen
        name={routes.PARAMETERS}
        component={ParametersScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="cog" size={size} color={color} />
          ),
          title: "Stats",
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: colors.black,
    borderTopWidth: 5,
    borderTopColor: colors.light,
  },
});
export default AppNavigator;
