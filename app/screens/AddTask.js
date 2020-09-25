import React from "react";
import { View, StyleSheet, Button, ImageBackground, Text } from "react-native";
import { Formik } from "formik";
import AppFormField from "../components/Forms/AppFormField";
import * as yup from "yup";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import appStyle from "../config/styles";
import AppDateTimePicker from "../components/Forms/AppDateTimePicker";

const validationSchema = yup.object().shape({
  title: yup.string().required().max(255).label("Name"),
  dueDate: yup.date().required().label("Due date"),
});

function AddTask(props) {
  const submitPress = (values) => {
    console.log(values);
  };
  return (
    <ImageBackground
      source={require("../assets/background_task.jpg")}
      style={styles.image}
      blurRadius={10}
    >
      <View style={styles.overlay} pointerEvents="none" />
      <Screen style={styles.container}>
        <Text style={[styles.title, appStyle.title]}>Add a new task !</Text>
        <Formik
          initialValues={{ title: "", dueDate: "" }}
          onSubmit={submitPress}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              <AppFormField name="title" placeholder="Name" />
              <AppDateTimePicker name="dueDate" placeholder="Due Date" />
              <AppButton
                title="Add"
                color={colors.validation}
                onPress={handleSubmit}
                width={"50%"}
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
    alignItems: "center",
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
  title: {
    color: colors.lightGrey,
    marginBottom: 20,
  },
});

export default AddTask;
