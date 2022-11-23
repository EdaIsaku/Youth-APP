import { RootStack } from "./RootStack";
import { IntroScreens } from "../screens";

const showRealApp = true;

export const RootTab = () => {
  return <>{!showRealApp ? <IntroScreens /> : <RootStack />}</>;
};
