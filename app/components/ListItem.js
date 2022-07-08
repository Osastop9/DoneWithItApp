import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({
  image,
  title,
  subTitle,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white
  },
  detailsContainer:{
    marginLeft: 10,
    justifyContent: "center",
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
