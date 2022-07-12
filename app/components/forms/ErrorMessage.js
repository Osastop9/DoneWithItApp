import React from "react";
import { StyleSheet } from "react-native";

import Text from "../Text"

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.text}>{error}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default ErrorMessage;
