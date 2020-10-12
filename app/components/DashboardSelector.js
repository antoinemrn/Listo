import moment from "moment";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import useDate from "../hooks/useDate";
import DashboardSelectorItem from "./DashboardSelectorItem";

function DashboardSelector({ updateDate }) {
  const [activeTab, setActiveTab] = useState("Today ");

  const dateTools = useDate();

  const onTabPress = (tabName) => {
    setActiveTab(tabName);
    switch (tabName) {
      case "Today ":
        updateDate(dateTools.getToday());
        break;
      case "Week ":
        updateDate(dateTools.getLastDayWeek());
        break;
      case "Past ":
      case "All ":
      default:
        updateDate(null);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <DashboardSelectorItem
        title="Past "
        onPress={() => onTabPress("Past ")}
        active={activeTab == "Past "}
      />
      <DashboardSelectorItem
        title="Today "
        onPress={() => onTabPress("Today ")}
        active={activeTab == "Today "}
      />
      <DashboardSelectorItem
        title="Week "
        onPress={() => onTabPress("Week ")}
        active={activeTab == "Week "}
      />
      <DashboardSelectorItem
        title="All "
        onPress={() => onTabPress("All ")}
        active={activeTab == "All "}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    marginBottom: 20,
  },
});

export default DashboardSelector;
