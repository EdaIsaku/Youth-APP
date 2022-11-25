import { RootStack } from "./RootStack";
import { IntroScreens } from "../screens";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const RootTab = () => {
  const showRealApp = useSelector(
    (state: RootState) => state.settings.showRealApp
  );
  return <>{!showRealApp ? <IntroScreens /> : <RootStack />}</>;
};
