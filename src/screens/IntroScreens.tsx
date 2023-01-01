import React, { useRef } from "react";
import AppIntroSlider from "react-native-app-intro-slider";

import { SLIDES } from "../constants";
import { IntroPage, IntroPagination } from "../components/index";

export const IntroScreens = () => {
  const slider = useRef<AppIntroSlider>(null);
  type Item = typeof SLIDES[0];

  const _keyExtractor = (item: { key: any }) => item.key;

  const _renderItem = ({ item }: { item: Item }) => {
    return <IntroPage item={item} />;
  };

  const _renderPagination = (activeIndex: number) => {
    return <IntroPagination activeIndex={activeIndex} slider={slider} />;
  };

  return (
    <AppIntroSlider
      ref={slider}
      data={SLIDES}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
      renderPagination={_renderPagination}
    />
  );
};
