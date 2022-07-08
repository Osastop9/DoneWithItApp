import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icons from "../components/Icons";
import ListItem from "../components/ListItem";

import Screens from "../components/Screens";
import colors from "../config/colors";

const menuItem = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },

    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    }
]

function AccountScreen(props) {
  return (
    <Screens>
      <View style={styles.container}>
        <ListItem
          title={"Isaac Uduehi"}
          subTitle={"isaacuduehi9@gmail.com"}
          image={require("../assets/isaac.jpeg")}
        />
      </View>
      <View>
        <FlatList 
        data={menuItem}
        keyExtractor={menuItem => menuItem.title}
        renderItem={({item}) => 
        <ListItem
        title={item.title}
        subTitle={item.subTitle}
        ImageComponent={
            <Icons name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
        }/>}/>
      </View>
    </Screens>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;
