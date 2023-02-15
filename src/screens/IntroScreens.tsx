import React, { useEffect, useRef, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";

import { SLIDES } from "../constants";
import { IntroPage, IntroPagination } from "../components/index";
import { useAtom } from "jotai";
import { showRealAppAtom } from "../store";

export const IntroScreens = () => {
  const [showRealApp, setShowRealApp] = useAtom(showRealAppAtom);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const slider = useRef<AppIntroSlider>(null);
  type Item = typeof SLIDES[0];

  const _keyExtractor = (item: { key: any }) => item.key;

  const _renderItem = ({ item }: { item: Item }) => {
    return <IntroPage item={item} />;
  };

  const _renderPagination = (activeIndex: number) => {
    return <IntroPagination activeIndex={activeIndex} slider={slider} />;
  };

  const onDone = () => {
    setShowRealApp(true);
  };

  return (
    <AppIntroSlider
      ref={slider}
      data={SLIDES}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
      renderPagination={_renderPagination}
      scrollEnabled={scrollEnabled}
      onSlideChange={(index, lastIndex) => {}}
      onDone={onDone}
    />
  );
};
