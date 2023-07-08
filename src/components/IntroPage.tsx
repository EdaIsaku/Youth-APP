import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { COLORS, SIZES } from "../../theme/theme";
import { SLIDES } from "../constants";

type Item = (typeof SLIDES)[0];

export const IntroPage = ({ item }: { item: Item }) => {
  const { appName, image, title, text, component, code } = item;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.slide}>
        {image && (
          <>
            <Text style={styles.appName}>{appName}</Text>

            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image} />
            </View>
          </>
        )}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{text}</Text>
        <View style={styles.componentContainer}>{component}</View>
        <View>
          <Text>{code}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  componentContainer: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  appName: {
    color: COLORS.primary,
    fontSize: SIZES.largeTitle,
    fontFamily: "Lato-Bold",
    paddingVertical: 20,
    letterSpacing: -1,
  },
  imageContainer: {
    width: "100%",
    height: "40%",
  },
  image: {
    ...SIZES.fullSize,
    resizeMode: "contain",
  },
  title: {
    color: COLORS.grey,
    fontSize: SIZES.h1,
    fontFamily: "Lato-Regular",
    padding: SIZES.padding,
  },
  paragraph: {
    color: COLORS.grey,
    fontSize: SIZES.body2 - 2,
    fontFamily: "Lato-Light",
    textAlign: "center",
    paddingHorizontal: SIZES.padding * 3,
    paddingVertical: SIZES.padding,
    lineHeight: 26,
  },
});
