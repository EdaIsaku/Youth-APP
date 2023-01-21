import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import { ICONS } from "../constants";

export const SettingsElement = ({
  iconName,
  element,
}: {
  iconName: any;
  element: string;
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.elementContainer}>
        <View style={styles.iconContainer}>
          <Image source={iconName} style={styles.icon} />
        </View>
        <Text style={styles.element}>{element}</Text>
      </View>
      <Image source={ICONS.right} style={styles.rightIcon}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: COLORS.grey,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 2,
  },
  elementContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    ...POSITION.center,
    backgroundColor: COLORS.transparentWhite,
    marginRight: 20,
  },
  icon: {
    width: "65%",
    height: "65%",
    tintColor: COLORS.white,
  },
  element: {
    color: COLORS.white,
    fontSize: SIZES.body3,
  },
  rightIcon: {
    tintColor: COLORS.white,
    width: 30,
    height: 30,
  },
});
