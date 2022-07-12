import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Icons from "./Icons";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icons
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: '33%'
  },
  label:{
    marginTop: 10,
    textAlign: 'center'
  }
});

export default CategoryPickerItem;
