import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { COLORS, SIZES } from "../../theme/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import { ICONS } from "../constants/icons";

export const CustomIntroButton = ({
  handleNextPress,
  buttonText,
}: {
  handleNextPress: any;
  buttonText?: String;
}) => {
  useEffect(() => {
    //Transition form rounded to large and vice versa
    buttonText !== undefined && buttonText?.length > 0
      ? ((animatedWidth.value = 150),
        (animatedHeight.value = 40),
        (animatedTextOpacity.value = 1),
        (animatedIconOpacity.value = 0))
      : ((animatedWidth.value = 50),
        (animatedHeight.value = 50),
        (animatedTextOpacity.value = 0),
        (animatedIconOpacity.value = 1));
  }, [buttonText]);

  const animatedWidth = useSharedValue(90);
  const animatedHeight = useSharedValue(50);
  const animatedTextOpacity = useSharedValue(0);
  const animatedIconOpacity = useSharedValue(0);

  const widthConfig = {
    duration: 150,
    easing: Easing.ease,
  };
  const opacityConfig = {
    duration: 400,
    easing: Easing.ease,
  };
  const animatedWidthStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animatedWidth.value, widthConfig),
      height: withTiming(animatedHeight.value, widthConfig),
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animatedTextOpacity.value, opacityConfig),
    };
  });
  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animatedIconOpacity.value, opacityConfig),
    };
  });

  return (
    <TouchableOpacity onPress={handleNextPress}>
      <Animated.View
        // exiting={FadeOut}
        style={[
          styles.button,
          animatedWidthStyle,
          { width: animatedWidth.value, height: animatedHeight.value },
        ]}
      >
        {buttonText ? (
          <Animated.Text
            // entering={FadeIn.duration(500)}
            style={[
              styles.text,
              animatedTextStyle,
              { opacity: animatedTextOpacity.value },
            ]}
          >
            {buttonText}
          </Animated.Text>
        ) : (
          <Animated.Image
            source={ICONS.next}
            style={[
              styles.icon,
              animatedIconStyle,
              { opacity: animatedTextOpacity.value },
            ]}
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.border * 3,
  },
  icon: {
    width: "60%",
    height: "60%",
    tintColor: COLORS.white,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontFamily: "Lato-Regular",
  },
});
