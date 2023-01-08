import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ICONS } from "../constants/icons";
import { CustomButton } from "./CustomButton";

export const PermissionDenied = () => {
  const handlePress = () => {
    console.log("Go to settings");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ICONS.notification}></Image>
      </View>
      <Text>Enable Notifications</Text>
      <Text>Enable notifications so you don't miss last news from YOUTH.</Text>
      <CustomButton buttonText="Go to Settings" handlePress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  imageContainer: {
    flex: 0.5,
  },
});
