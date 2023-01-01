import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSpring,
} from "react-native-reanimated";
import { SLIDES } from "../constants";
import { COLORS, FONTS } from "../../theme/theme";
import { CustomIntroButton } from "./CustomIntroButton";
import { SIZES } from "../../dist/theme/theme";

export const IntroPagination = ({
  activeIndex,
  slider,
}: {
  activeIndex: number;
  slider: any;
}) => {
  let buttonText = activeIndex === 1 ? "Allow Notification" : "";
  // const offset = useSharedValue(1);

  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: offset.value,
  //       },
  //     ],
  //   };
  // });

  const handleSkip = () => {
    slider.current.goToSlide(activeIndex + 1);
  };
  const handleNextPress = () => {
    slider.current.goToSlide(activeIndex + 1);
  };

  return (
    <View style={styles.paginationContainer}>
      <SafeAreaView>
        <View style={styles.paginationDots}>
          {SLIDES.length > 1 &&
            SLIDES.map((_, i) => (
              <Animated.View key={i}>
                <TouchableOpacity
                  style={[styles.dot, i === activeIndex && styles.activeDot]}
                  onPress={() => {
                    // offset.value = withSpring(Math.random() * 255);
                    slider?.current.goToSlide(i, true);
                  }}
                />
              </Animated.View>
            ))}
        </View>

        <View style={styles.buttonContainer}>
          {activeIndex === 1 || activeIndex === 2 ? (
            <TouchableOpacity style={styles.skip} onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
          <CustomIntroButton
            handleNextPress={handleNextPress}
            buttonText={buttonText}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,

    // width: 15,
    // height: 15,
    // transform: [{ rotate: "45deg" }],
    marginBottom: 80,
    marginHorizontal: SIZES.margin / 4,
    backgroundColor: COLORS.lightGrey,
  },
  activeDot: {
    backgroundColor: COLORS.secondary,
    width: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: SIZES.margin,
    marginBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  skip: {
    padding: 10,
  },
  skipText: {
    color: COLORS.primary,
    ...FONTS.body2,
  },
});
