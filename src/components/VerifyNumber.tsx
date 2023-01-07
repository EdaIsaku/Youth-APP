import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { CustomButton } from "./CustomButton";
import { COLORS, SIZES } from "../../theme/theme";

export const VerifyNumber = () => {
  let digitArray = [1, 2, 3, 4];
  const handlePress = () => {
    console.log("Verify");
  };
  return (
    <View style={styles.container}>
      <View style={styles.digitContainer}>
        {digitArray.map(() => {
          return (
            <TouchableOpacity style={styles.boxContainer}>
              <TextInput style={styles.digitInput}>1</TextInput>
            </TouchableOpacity>
          );
        })}
      </View>
      <CustomButton buttonText="Finish" handlePress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: SIZES.margin,
  },
  digitContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxContainer: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  digitInput: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.h1,
  },
});
