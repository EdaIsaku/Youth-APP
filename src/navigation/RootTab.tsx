import React from "react";
import { RootStack } from "./RootStack";
import { IntroScreens } from "../screens";

import { showRealAppAtom } from "../store";
import { useAtom } from "jotai";

export const RootTab = () => {
  const [showRealApp] = useAtom(showRealAppAtom);

  return <>{showRealApp ? <IntroScreens /> : <RootStack />}</>;
};
