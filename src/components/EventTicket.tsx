import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import QRCode from "react-native-qrcode-svg";
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const EventTicket = ({
  name,
  lName,
  ticketNumber,
}: {
  name: String;
  lName: String;
  ticketNumber: Number;
}) => {
  const initials = name[0].toUpperCase();
  const username = `/${name}${lName}`;

  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
    };
  });
  const start = useSharedValue({ x: 0, y: 0 });
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      // console.log(e.translationX, e.translationY);

      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: 0,
        y: 0,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, animatedStyles]}>
          <View style={[styles.circle, styles.topCircle]}></View>
          <View style={styles.upperContainer}>
            <View style={styles.initialsContainer}>
              <Text style={styles.initials}>{initials}</Text>
            </View>
            <View style={styles.usernameContainer}>
              <Text style={styles.name}>{`${name} ${lName}`}</Text>
              <Text style={styles.username}>{username}</Text>
            </View>
            <View style={styles.QRContainer}>
              <QRCode size={110} value="EDAISAKU" />
            </View>
            <View style={styles.eventDataContainer}>
              <View style={styles.eventNameContainer}>
                <Text style={styles.eventName}>YOUTH</Text>
                <View style={styles.eventTypeContainer}>
                  <Text style={styles.eventType}>FESTIVAL</Text>
                </View>
              </View>
              <Text style={styles.eventDate}>10:30 AM Oct 25, 2023.</Text>
            </View>
          </View>
          <View style={styles.dottedContainer}></View>
          <View style={styles.lowerContainer}>
            <Text style={styles.ticketNumber}>{`#${ticketNumber}`}</Text>
          </View>
          <View style={[styles.circle, styles.bottomCircle]}></View>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
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
    height: "75%",
  },
  dottedContainer: {
    width: SIZES.phoneDimensions.width - 75,
    // width: "100%",
    height: 2,
    borderWidth: 0.7,
    borderColor: COLORS.transparentWhite,
    borderStyle: "dashed",
    // backgroundColor: "red",
  },
  lowerContainer: {
    ...POSITION.center,
    width: "100%",
    height: "25%",
    paddingBottom: SIZES.padding * 2,
  },
  circle: {
    position: "absolute",
    width: 80,
    height: 40,
    borderColor: COLORS.transparentWhite,
    borderWidth: 1,
  },
  topCircle: {
    top: -1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopColor: COLORS.black,
  },
  bottomCircle: {
    bottom: -1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomColor: COLORS.black,
  },
  initialsContainer: {
    ...POSITION.center,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: COLORS.transparentWhite,
    borderWidth: 1,
    marginTop: 50,
  },
  usernameContainer: {
    ...POSITION.center,
  },
  QRContainer: {
    ...POSITION.center,
    width: 120,
    height: 120,
    backgroundColor: COLORS.white,
  },
  eventDataContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "10%",
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
    fontFamily: "Lato-Bold",
    fontSize: SIZES.largeTitle,
    color: COLORS.secondary,
  },
  name: {
    color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h1 + 10,
    letterSpacing: -2,
  },
  username: {
    color: COLORS.white,
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body2,
  },
  ticketNumber: {
    color: COLORS.white,
    fontSize: SIZES.largeTitle,
    fontFamily: "Orbitron-Regular",
    letterSpacing: 3,
  },
  eventName: {
    color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h2,
  },
  eventType: {
    color: COLORS.white,
    padding: 5,
  },
  eventDate: {
    color: COLORS.white,
  },
});
