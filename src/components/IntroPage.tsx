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

type Item = typeof SLIDES[0];

export const IntroPage = ({ item }: { item: Item }) => {
  const { appName, image, title, text, component } = item;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.slide}>
        <Text style={styles.appName}>{appName}</Text>
        {image ? (
          <>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image} />
            </View>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.paragraph}>{text}</Text>
          </>
        ) : (
          <View
            style={{
              justifyContent: "center",
              width: "100%",
              height: "80%",
              backgroundColor: COLORS.lightGrey,
            }}
          >
            {component}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  appName: {
    color: COLORS.primary,
    fontSize: SIZES.largeTitle,
    fontFamily: "Lato-Black",
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
    fontFamily: "Lato-Bold",
    padding: SIZES.padding,
  },
  paragraph: {
    color: COLORS.grey,
    fontSize: SIZES.body2,
    fontFamily: "Lato-Regular",
    paddingHorizontal: SIZES.padding * 3,
    paddingVertical: SIZES.padding,
  },
});
