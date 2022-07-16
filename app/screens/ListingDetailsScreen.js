import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Text from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
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
    marginTop: 40,
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
