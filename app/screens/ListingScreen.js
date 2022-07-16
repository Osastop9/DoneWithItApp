import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Screens from "../components/Screens";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Android Phone for sale",
    price: 100,
    image: require("../assets/obi.jpg"),
  },
  {
    id: 2,
    title: "Laptop for sale",
    price: 100,
    image: require("../assets/remote.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screens style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
});

export default ListingScreen;
