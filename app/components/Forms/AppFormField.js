import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../config/colors";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        style={styles.input}
        placeholderTextColor={colors.lightGrey}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderBottomWidth: 2,
    borderColor: colors.lightGrey,
    color: colors.white,
    padding: 10,
    margin: 10,
  },
});

export default AppFormField;
