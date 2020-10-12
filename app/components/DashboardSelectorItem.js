import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";

function DashboardSelectorItem({ title, active, onPress }) {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <TouchableOpacity
        style={[
          styles.container,
          active ? styles.containerActive : styles.containerInactive,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.text,
            active ? styles.textActive : styles.textInactive,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    height: "100%",
  },
  containerActive: {
    backgroundColor: colors.primary,
  },
  containerInactive: {},
  text: {
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  textActive: {
    color: colors.white,
  },
  textInactive: {
    color: colors.primary,
  },
});

export default DashboardSelectorItem;
