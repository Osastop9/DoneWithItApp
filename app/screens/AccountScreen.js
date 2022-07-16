import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icons from "../components/Icons";
import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";

import Screens from "../components/Screens";
import colors from "../config/colors";

const menuItems = [
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
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screens style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Isaac Uduehi"
          subTitle="isaacuduehi9@gmail.com"
          image={require("../assets/isaac.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icons
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icons name="logout" backgroundColor="#ffe66d" />}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
