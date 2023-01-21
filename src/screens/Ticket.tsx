import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { EventTicket } from "../components";
import { COLORS, SIZES } from "../../theme/theme";

export const Ticket = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MyTicket</Text>
      </View>
      <View style={styles.ticketsContainer}>
        <EventTicket name={"Eda"} lName={"Isaku"} ticketNumber={108223} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
  titleContainer: {
    flex: 0.1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  ticketsContainer: {
    flex: 0.75,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h1,
    color: COLORS.white,
  },
});
