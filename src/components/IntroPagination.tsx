import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
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
  const buttonText = activeIndex === 1 ? "Allow Notification" : "";

  const animatedWidth = useSharedValue(12);
  const animatedColor = useSharedValue(COLORS.lightGrey);
  const animatedText = useSharedValue("");

  const config = {
    duration: 500,
    easing: Easing.ease,
  };

  useEffect(() => {
    animateDot();
    activeIndex === 1
      ? (animatedText.value = withTiming("Allow Notifications"))
      : "";
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      backgroundColor: animatedColor.value,
    };
  });
  const animateDot = () => {
    animatedWidth.value = withTiming(45, config);
    animatedColor.value = withTiming(COLORS.secondary, config);
  };

  const handleSkip = () => {
    animateDot();
    slider.current.goToSlide(activeIndex + 1);
  };

  const handleNextPress = () => {
    animateDot();
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
                  style={[
                    styles.dot,
                    animatedStyles,
                    i === activeIndex
                      ? {
                          width: animatedWidth.value,
                          backgroundColor: animatedColor.value,
                        }
                      : {
                          width: 12,
                          backgroundColor: COLORS.lightGrey,
                        },
                  ]}
                  onPress={() => {
                    animateDot();
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
    // backgroundColor: "red",
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    bottom: 120,
    left: 16,
    right: 16,
    // backgroundColor: "orange",
    position: "absolute",
    height: 16,
    // margin: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 120,
  },
  dot: {
    height: 12,
    borderRadius: 6,
    marginHorizontal: SIZES.margin / 4,
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
