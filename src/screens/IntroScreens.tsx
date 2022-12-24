import React, { useRef } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { useAtom } from "jotai";
import { showRealAppAtom } from "../store";

import { SLIDES } from "../constants";
import { COLORS } from "../../theme/theme";
import { IntroPage } from "../components";

export const IntroScreens = () => {
  const [showRealApp, setShowRealApp] = useAtom(showRealAppAtom);

  type Item = typeof SLIDES[0];

  const _renderItem = ({ item }: { item: Item }) => {
    return <IntroPage item={item} />;
  };

  const _keyExtractor = (item: { key: any }) => item.key;

  const _onDone = () => {
    setShowRealApp(true);
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image source={require("../../assets/icons/right-arrow.png")} />
      </View>
    );
  };
  return (
    <AppIntroSlider
      keyExtractor={_keyExtractor}
      data={SLIDES}
      renderItem={_renderItem}
      onDone={_onDone}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      renderNextButton={_renderNextButton}
    />
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.lightGrey,
  },
  activeDotStyle: {
    width: 25,
    height: 10,
    backgroundColor: COLORS.primary,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
