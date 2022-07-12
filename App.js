import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Screens from "./app/components/Screens";

export default function App() {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) {
      alert("You need to enable result to access library");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return <Screens></Screens>;
}
