import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";
import useDate from "../../hooks/useDate";

function AppDateTimePicker({ name, ...otherProps }) {
  const [showPicker, setShowPicker] = useState(false);
  const {
    handleChange,
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  const dateTools = useDate();

  const handleConfirm = (date) => {
    setFieldValue(name, dateTools.formatDate(date));
    hidePicker();
  };

  const hidePicker = () => {
    setShowPicker(false);
  };

  return (
    <>
      <TextInput
        caretHidden
        onBlur={() => {
          setFieldTouched(name);
        }}
        onTouchStart={() => {
          setShowPicker(true);
        }}
        onChange={handleChange}
        style={styles.input}
        placeholderTextColor={colors.light}
        value={values[name]}
        {...otherProps}
      />
      <DateTimePickerModal
        isVisible={showPicker}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: "90%",
    borderBottomWidth: 2,
    borderColor: colors.white,
    color: colors.white,
    padding: 10,
    margin: 10,
  },
});

export default AppDateTimePicker;
