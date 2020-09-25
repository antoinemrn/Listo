import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { NativeModules, Platform } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";
import Moment from "moment/min/moment-with-locales";

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

  const locale =
    Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  const handleConfirm = (date) => {
    setFieldValue(name, formatDate(date));
    hidePicker();
  };

  const hidePicker = () => {
    setShowPicker(false);
  };

  const formatDate = (date) => {
    Moment.locale(locale);
    return Moment(date).format("LL").toString();
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
        placeholderTextColor={colors.lightGrey}
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
    borderColor: colors.lightGrey,
    color: colors.white,
    padding: 10,
    margin: 10,
  },
});

export default AppDateTimePicker;
