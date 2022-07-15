import { Platform, StyleSheet } from "react-native";
import colors from "./colors";

export default styles = StyleSheet.create({
  text: {
    color: colors.darkGrey,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
