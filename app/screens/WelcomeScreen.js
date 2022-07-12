import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logored.png")} />
        <Text style={styles.tagline}>Sell what you don't need!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" />

        <Button title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingTop: 20,
  },
});

export default WelcomeScreen;
