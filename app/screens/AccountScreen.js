import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icons from "../components/Icons";
import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";

import Screens from "../components/Screens";
import colors from "../config/colors";

const menuItem = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },

  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screens style={styles.screen}>
      <View>
        <ListItem
          title={"Isaac Uduehi"}
          subTitle={"isaacuduehi9@gmail.com"}
          image={require("../assets/isaac.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.subTitle}
              ImageComponent={
                <Icons
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title={"Logout"}
        ImageComponent={<Icons name={"logout"} backgroundColor={"#ffe66d"} />}
      />
    </Screens>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});
export default AccountScreen;
