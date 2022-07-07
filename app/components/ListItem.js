import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.grey,
  },
});

export default ListItem;
