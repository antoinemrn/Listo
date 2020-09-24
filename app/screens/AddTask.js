import React from "react";
import { View, StyleSheet, Button, ImageBackground } from "react-native";
import { Formik } from "formik";
import AppFormField from "../components/Forms/AppFormField";
import * as yup from "yup";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  title: yup.string().required().max(255),
  dueDate: yup.date().required(),
});

function AddTask(props) {
  const submitPress = (values) => {
    console.log(values);
  };
  return (
    <ImageBackground
      source={require("../assets/background_task.jpg")}
      style={styles.image}
      blurRadius={5}
    >
      <View style={styles.overlay} pointerEvents="none" />
      <Screen style={styles.container}>
        <Formik
          initialValues={{ title: "", dueDate: "" }}
          onSubmit={submitPress}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              <AppFormField name="title" placeholder="Name..." />
              <AppFormField name="dueDate" placeholder="Date..." />
              <AppButton
                title="Add"
                color={colors.validation}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
    opacity: 0.8,
  },
});

export default AddTask;
