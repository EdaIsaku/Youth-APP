import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import { ICONS } from "../constants";

export const PopularEvent = ({
  eventName,
  eventType,
  image,
}: {
  eventName: string;
  eventType: string;
  image: any;
}) => {
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
      <ImageBackground
        imageStyle={styles.image}
        source={image}
        style={styles.image}
      >
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.eventName}>{eventName}</Text>
            <View style={styles.rowContainer}>
              <Image source={ICONS.music} style={styles.icon}></Image>
              <Text style={styles.eventInfo}>{eventType}</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={{ flexDirection: "row", ...POSITION.center }}
            >
              <Text style={styles.moreInfo}>Learn More</Text>
              <Image source={ICONS.right} style={styles.icon}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...POSITION.center,
    backgroundColor: COLORS.white,
    width: SIZES.phoneDimensions.width / 1.3,
    height: "85%",
    marginHorizontal: SIZES.margin,
    borderRadius: SIZES.border * 2,
  },
  reactionContainer: {
    ...POSITION.center,
    position: "absolute",
    zIndex: 2,
    right: -15,
    top: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.lightGrey,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: COLORS.black,
    ...POSITION.center,
  },
  heartIcon: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.border * 2,
  },
  eventName: {
    color: COLORS.white,
    fontFamily: "Lato-Regular",
    fontSize: SIZES.h1 - 5,
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: COLORS.white,
  },
  eventInfo: {
    paddingLeft: 5,
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontFamily: "Lato-Light",
  },
  moreInfo: {
    paddingRight: 5,
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontFamily: "Lato-Light",
  },
});
