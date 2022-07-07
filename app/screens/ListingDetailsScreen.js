import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/obi.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Android Phone for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.listItemContainer}>
        <ListItem
          image={require("../assets/isaac.jpeg")}
          title="Isaac Uduehi"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  listItemContainer: {
    marginTop: 40
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
