import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../theme/theme";

export const CustomButton = ({
  buttonText,
  handlePress,
}: {
  buttonText: string;
  handlePress: (() => void) | undefined;
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.body2,
    fontFamily: "Lato-Regular",
    textTransform: "uppercase",
  },
});
