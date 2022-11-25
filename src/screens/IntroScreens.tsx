import React from "react";
import { Text, View, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useDispatch } from "react-redux";
import { setShowRealApp } from "../../redux/features/settingsSlice";

import { SLIDES } from "../constants/slides";

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
  const dispatch = useDispatch();

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={SLIDES}
      onDone={() => dispatch(setShowRealApp(true))}
    />
  );
};
