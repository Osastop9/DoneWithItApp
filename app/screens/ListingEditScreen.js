import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screens from "../components/Screens";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Mobile Phones", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Laptops", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen(props) {
  return (
    <Screens style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name={"title"} placeholder={"Title"} />
        <View style={styles.priceCategory}>
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name={"price"}
          placeholder={"Price"}
          width={"50%"}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder={"Category"}
          width={"50%"}
        />
        </View>
        <FormField
          maxLength={255}
          multiline
          name={"description"}
          numberOfLines={3}
          placeholder={"Description"}
        />

        <SubmitButton title={"Post"} />
      </Form>
    </Screens>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  priceCategory: {
    flexDirection: 'row'
  }
});

export default ListingEditScreen;
