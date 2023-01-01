import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../theme/theme";

export const CustomIntroButton = ({
  handleNextPress,
  buttonText,
}: {
  handleNextPress: any;
  buttonText?: String;
}) => {
  return (
    <TouchableOpacity
      style={buttonText ? styles.textButton : styles.iconButton}
      onPress={handleNextPress}
    >
      {buttonText ? (
        <Text style={styles.text}>{buttonText}</Text>
      ) : (
        <Image
          source={require("../../assets/icons/arrow-icon.png")}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  textButton: {
    width: 130,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  icon: {
    width: "80%",
    height: "80%",
    tintColor: COLORS.white,
  },
  text: {
    color: COLORS.white,
  },
});
