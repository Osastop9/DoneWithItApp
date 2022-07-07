import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import Screens from "../components/Screens";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/isaac.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/isaac.jpeg"),
  },

  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/isaac.jpeg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screens>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=> console.log("Message selected", item)}
          />
        )}

        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screens>
  );
}

export default MessagesScreen;
