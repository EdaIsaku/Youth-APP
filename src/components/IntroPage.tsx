import React from "react";

import { Text, Image, StyleSheet, ScrollView } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";
import { SLIDES } from "../constants";

type Item = typeof SLIDES[0];

export const IntroPage = ({ item }: { item: Item }) => {
  const { appName, image, title, text } = item;
  return (
    <ScrollView contentContainerStyle={styles.slide}>
      <Text style={styles.appName}>{appName}</Text>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>{text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    padding: SIZES.padding,
  },
  appName: {
    color: COLORS.primary,
    fontSize: SIZES.xxl,
    fontFamily: "Lato-Black",
    letterSpacing: -1,
    marginVertical: SIZES.margin * 4,
  },
  image: {
    flex: 0.6,
    width: "100%",
    marginBottom: SIZES.margin,
  },
  title: {
    color: COLORS.grey,
    fontSize: SIZES.xl,
    fontFamily: "Lato-Bold",
    padding: SIZES.padding,
  },
  paragraph: {
    color: COLORS.grey,
    fontSize: SIZES.md,
    fontFamily: "Lato-Regular",
    padding: SIZES.padding,
  },
});
