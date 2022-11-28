import { RootStack } from "./RootStack";
import { IntroScreens } from "../screens";

import { useAtom } from "jotai";
import { showRealAppAtom } from "../store";

export const RootTab = () => {
  const [showRealApp] = useAtom(showRealAppAtom);

  return <>{!showRealApp ? <IntroScreens /> : <RootStack />}</>;
};
