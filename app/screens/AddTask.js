import React from "react";
import {
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import AppFormField from "../components/Forms/AppFormField";
import * as yup from "yup";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppDateTimePicker from "../components/Forms/AppDateTimePicker";
import useApi from "../hooks/useApi";
import taskApi from "../api/tasks";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  name: yup.string().required().max(255).label("Name"),
  dueDate: yup.date().required().label("Due date"),
});

function AddTask(props) {
  const api = useApi(taskApi.postTask);

  const submitPress = (values) => {
    const response = api.request(values);
    if (response.ok) {
      alert("Error while addind a task !");
      return;
    }
    alert("New task added !");
    Keyboard.dismiss();
  };
  return (
    <Screen styleContainer={styles.container}>
      <Formik
        initialValues={{ name: "", dueDate: "" }}
        onSubmit={submitPress}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <AppFormField name="name" placeholder="Name" />
            <AppDateTimePicker name="dueDate" placeholder="Due Date" />
            <AppButton
              title="Add"
              color={colors.white}
              textColor={colors.primary}
              onPress={handleSubmit}
              width={"50%"}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default AddTask;
