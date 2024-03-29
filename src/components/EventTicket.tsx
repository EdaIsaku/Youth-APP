import { StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import QRCode from "react-native-qrcode-svg";

import { useAtom } from "jotai";
import { phoneNumberAtom } from "../store";

const animation = new Animated.Value(0);

Animated.timing(animation, {
  toValue: 1,
  duration: 200,
  useNativeDriver: true,
}).start();

const rotateInterpolate = animation.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "180deg"],
});
const animatedStyles = { transform: [{ rotate: rotateInterpolate }] };
const logoStyles = [animatedStyles];

export const EventTicket = ({
  name,
  lName,
  ticketNumber,
}: {
  name: String;
  lName: String;
  ticketNumber: Number;
}) => {
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);

  const initials = name[0].toUpperCase();

  return (
    <View style={[styles.container]}>
      <View style={[styles.circle, styles.topCircle]}></View>
      <View style={styles.upperContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.name}>{`${name} ${lName}`}</Text>
        </View>
        <Animated.View
          style={
            (styles.QRContainer, { transform: [{ rotate: rotateInterpolate }] })
          }
        >
          <View style={styles.initialsContainer}>
            <Text style={styles.initials}>{initials}</Text>
          </View>
          <QRCode size={220} value={`${phoneNumber}`} />
        </Animated.View>
        <View style={styles.eventDataContainer}>
          <View style={styles.eventNameContainer}>
            <Text style={styles.eventName}>YOUTH</Text>
            <View style={styles.eventTypeContainer}>
              <Text style={styles.eventType}>FESTIVAL</Text>
            </View>
          </View>
          <Text style={styles.eventDate}>10:30 AM Oct 25, 2023</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.ticketNumber}>{`#${ticketNumber}`}</Text>
      </View>
      <View style={[styles.circle, styles.bottomCircle]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...POSITION.center,
    width: "80%",
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: SIZES.border + 5,
    borderColor: COLORS.transparentWhite,
    borderWidth: 1,
  },
  upperContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "85%",
  },
  lowerContainer: {
    ...POSITION.center,
    width: "100%",
    height: "15%",
    paddingBottom: SIZES.padding * 2,
    borderTopColor: COLORS.transparentWhite,
    borderTopWidth: 0.5,
  },
  circle: {
    position: "absolute",
    width: 60,
    height: 30,
    borderColor: COLORS.transparentWhite,
    borderWidth: 1,
  },
  topCircle: {
    top: -1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopColor: COLORS.black,
  },
  bottomCircle: {
    bottom: -1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomColor: COLORS.black,
  },
  initialsContainer: {
    position: "absolute",
    top: -20,
    ...POSITION.center,
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    borderColor: COLORS.transparentWhite,
    borderWidth: 1,
  },
  usernameContainer: {
    ...POSITION.center,
    marginTop: 25,
  },
  QRContainer: {
    width: 250,
    height: 270,
    borderRadius: 25,
    backgroundColor: COLORS.black,
    borderWidth: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
    borderColor: "#020202",
    shadowColor: "#515151",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  eventDataContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "8%",
  },
  eventNameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 20,
  },
  eventTypeContainer: {
    borderTopColor: COLORS.white,
    borderTopWidth: 2,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
  },
  initials: {
    fontFamily: "Lato-Black",
    fontSize: SIZES.h1,
    color: COLORS.secondary,
  },
  name: {
    color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h1,
    letterSpacing: -1,
  },
  ticketNumber: {
    color: COLORS.white,
    fontSize: SIZES.h1,
    fontFamily: "Orbitron-Regular",
    letterSpacing: 5,
  },
  eventName: {
    color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h2,
  },
  eventType: {
    color: COLORS.white,
    padding: 5,
    marginLeft: 5,
  },
  eventDate: {
    color: COLORS.white,
  },
});
