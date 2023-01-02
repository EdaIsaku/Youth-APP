import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../theme/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export const CustomIntroButton = ({
  handleNextPress,
  buttonText,
}: {
  handleNextPress: any;
  buttonText?: String;
}) => {
  useEffect(() => {
    buttonText !== undefined && buttonText?.length > 0
      ? ((animatedWidth.value = 130),
        (animatedHeight.value = 40),
        (animatedTextOpacity.value = 1),
        (animatedIconOpacity.value = 0))
      : ((animatedWidth.value = 50),
        (animatedHeight.value = 50),
        (animatedTextOpacity.value = 0),
        (animatedIconOpacity.value = 1));
  }, [buttonText]);

  const animatedWidth = useSharedValue(50);
  const animatedHeight = useSharedValue(50);
  const animatedTextOpacity = useSharedValue(0);
  const animatedIconOpacity = useSharedValue(0);

  const widthConfig = {
    duration: 250,
    easing: Easing.ease,
  };
  const opacityConfig = {
    duration: 800,
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
        style={[
          styles.button,
          animatedWidthStyle,
          { width: animatedWidth.value, height: animatedHeight.value },
        ]}
      >
        {buttonText ? (
          <Animated.Text
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
            source={require("../../assets/icons/arrow-icon.png")}
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
    borderRadius: 30,
  },
  icon: {
    width: "80%",
    height: "80%",
    tintColor: COLORS.white,
  },
  text: {
    color: COLORS.white,
  },
});
