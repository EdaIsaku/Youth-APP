import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, POSITION, SIZES } from "../../theme/theme";

export const Category = ({
  fillColor,
  fontColor,
  info,
  icon,
}: {
  fillColor: string;
  fontColor: string;
  info: string;
  icon: any;
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ ...styles.iconContainer, backgroundColor: fillColor }}>
        <Image
          source={icon}
          style={{ ...styles.icon, tintColor: fontColor }}
        ></Image>
      </View>
      <Text style={{ color: fontColor }}>{info}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginRight: SIZES.margin * 1.5,
    width: SIZES.phoneDimensions.width / 2.5,
    height: 65,
    borderRadius: 35,
    paddingRight: 20,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    shadowColor: COLORS.lightGrey,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  iconContainer: {
    ...POSITION.center,
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  icon: {
    width: "60%",
    height: "60%",
  },
});
