import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  Button,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Screens from "./Screens";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.grey}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={colors.grey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screens>
          <Button title={"Close"} onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screens>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginEnd: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
