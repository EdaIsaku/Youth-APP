import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../theme/theme";
import { ICONS } from "../constants/icons";

export const PopularEvent = () => {
  const [prefered, setIsPrefered] = useState(false);
  const handleIconPress = () => {
    setIsPrefered(!prefered);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.reactionContainer}
        onPress={handleIconPress}
      >
        <Image
          source={prefered ? ICONS.fullheart : ICONS.heart}
          style={styles.heartIcon}
        ></Image>
      </TouchableOpacity>
      <Text>Lorem Ipsum</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    width: SIZES.phoneDimensions.width / 2.4,
    height: "90%",
    marginHorizontal: 10,
    borderRadius: SIZES.border * 4,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  reactionContainer: {
    position: "absolute",
    right: -15,
    top: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  heartIcon: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
});
