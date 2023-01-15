import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../theme/theme";

export const EventTicket = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Ticket</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 130,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.border,
    marginVertical: SIZES.margin,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 5,
  },
});
