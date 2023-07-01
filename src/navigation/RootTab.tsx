import React from "react";
import { IntroScreens } from "../screens";
import { RootStack } from "./RootStack";

import { useAtom } from "jotai";
import { showRealAppAtom } from "../store";

export const RootTab = () => {
  const [showRealApp] = useAtom(showRealAppAtom);

  return <>{showRealApp ? <RootStack /> : <IntroScreens />}</>;
};
