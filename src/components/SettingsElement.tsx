import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import { ICONS } from "../constants";
import { color } from "react-native-reanimated";

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
        <Text
          style={[
            styles.element,
            element == "Log Out" ? styles.logOut : styles.element,
          ]}
        >
          {element}
        </Text>
      </View>
      <Image source={ICONS.right} style={styles.rightIcon}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
    shadowColor: COLORS.lightGrey,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
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
    marginLeft: 5,
    ...POSITION.center,
    backgroundColor: COLORS.white,
    marginRight: 20,
    shadowColor: COLORS.darkGrey,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  icon: {
    width: "65%",
    height: "65%",
    tintColor: COLORS.secondary,
  },
  element: {
    color: COLORS.darkGrey,
    fontSize: SIZES.body3,
    fontFamily: "Lato-Regular",
  },
  logOut: {
    color: "red",
  },
  rightIcon: {
    tintColor: COLORS.primary,
    width: 30,
    height: 30,
  },
});
