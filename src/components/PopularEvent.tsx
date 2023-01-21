import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import { ICONS } from "../constants";

export const PopularEvent = ({
  eventName,
  place,
  time,
  image,
}: {
  eventName: string;
  place: string;
  time: string;
  image: any;
}) => {
  const [prefered, setIsPrefered] = useState(false);
  const handleIconPress = () => {
    setIsPrefered(!prefered);
  };
  const info = ["location", "time"];
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
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image}></Image>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.eventName}>{eventName}</Text>
        {info.map((el, idx) => {
          return (
            <View style={styles.detailsContainer} key={idx}>
              <View style={styles.iconContainer}>
                <Image
                  source={el === "location" ? ICONS.location : ICONS.time}
                  style={styles.icon}
                ></Image>
              </View>
              <Text style={styles.eventInfo}>
                {el === "location" ? place : time}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...POSITION.center,
    backgroundColor: COLORS.black,
    width: SIZES.phoneDimensions.width / 2.3,
    height: "90%",
    marginHorizontal: SIZES.margin,
    borderRadius: SIZES.border * 2,
    shadowColor: COLORS.white,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  reactionContainer: {
    ...POSITION.center,
    position: "absolute",
    right: -15,
    top: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.black,
    shadowColor: COLORS.white,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  imageContainer: {
    ...POSITION.center,
    width: 100,
    height: 100,
    borderRadius: 45,
    marginBottom: 30,
    shadowColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  infoContainer: {
    width: "80%",
    height: "40%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: COLORS.transparentWhite,
    ...POSITION.center,
  },
  heartIcon: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  eventName: {
    color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.body3,
    paddingBottom: 20,
  },
  icon: {
    width: "60%",
    height: "60%",
    tintColor: "white",
  },
  eventInfo: {
    paddingLeft: 10,
    color: COLORS.white,
    fontSize: SIZES.body3,
  },
});
