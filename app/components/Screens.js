import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Constants from "expo-constants";

function Screens({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screens;
