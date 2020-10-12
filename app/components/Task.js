import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../config/colors";
import appStyle from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

function Task({
  name,
  dueDate,
  iconName,
  onPress,
  chevronOff = false,
  color1 = colors.light,
  color2 = colors.back1,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {}]}>
      <LinearGradient
        style={styles.gradient}
        colors={[color1, color2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            name={iconName}
            size={40}
            style={styles.icon}
          />
          <Text style={[styles.text, appStyle.title]}>{name}</Text>
        </View>
        <View style={styles.coreContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vulputate odio ut enim blandit volutpat maecenas. Ultrices vitae
              auctor eu augue. At lectus urna duis convallis. Metus vulputate eu
              scelerisque felis imperdiet proin fermentum. Duis ultricies lacus
              sed turpis tincidunt id aliquet. Tortor aliquam nulla facilisi
              cras. Platea dictumst vestibulum rhoncus est pellentesque elit.
              Ipsum dolor sit amet consectetur adipiscing elit. Iaculis nunc sed
              augue lacus viverra. Id aliquet lectus proin nibh nisl condimentum
              id venenatis. Ultrices gravida dictum fusce ut placerat orci nulla
              pellentesque. Consectetur adipiscing elit pellentesque habitant
              morbi tristique senectus. Nunc mi ipsum faucibus vitae aliquet nec
              ullamcorper sit amet. Morbi tristique senectus et netus et
              malesuada fames. Risus feugiat in ante metus dictum at tempor
              commodo.
            </Text>
            {dueDate && <Text style={styles.textLight}>{dueDate}</Text>}
          </View>
          {!chevronOff && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={50}
              color={colors.white}
            />
          )}
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.category}>Test 1</Text>
          <Text style={styles.category}>Test 2</Text>
          <Text style={styles.category}>Test 3</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    height: 200,
    marginVertical: 10,
    elevation: 5,
    overflow: "hidden",
  },
  headerContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  coreContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  infoContainer: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },

  gradient: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderLeftWidth: 10,
    borderLeftColor: colors.primary,
  },
  icon: {
    marginRight: 10,
    backgroundColor: colors.white,
    color: colors.primary,
    borderRadius: 30,
    padding: 10,
  },
  text: {
    color: colors.white,
  },
  textLight: {
    color: colors.primary,
    textTransform: "lowercase",
    fontStyle: "italic",
  },
  category: {
    color: colors.white,
    marginRight: 10,
    backgroundColor: colors.light,
    borderRadius: 20,
    padding: 10,
  },
});

export default Task;
