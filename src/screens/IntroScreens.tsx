import React from "react";
import { Text, View, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { SLIDES } from "../constants/slides";
import { useAtom } from "jotai";
import { showRealAppAtom } from "../store";

type Slide = {
  key: number;
  title: string;
  text: string;
  image: string;
  backgroundColor: string;
};

const _renderItem = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Image source={item.image} />
      <Text>{item.text}</Text>
    </View>
  );
};

export const IntroScreens = () => {
  const [showRealApp, setShowRealApp] = useAtom(showRealAppAtom);
  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={SLIDES}
      onDone={() => setShowRealApp(true)}
    />
  );
};
