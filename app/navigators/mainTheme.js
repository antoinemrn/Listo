import React from "react";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const mainTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.back2,
  },
};

export default mainTheme;
