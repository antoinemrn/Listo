import React from "react";
import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.black,
  },
};

export default mainTheme;
