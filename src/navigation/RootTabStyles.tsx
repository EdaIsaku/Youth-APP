import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";

export const STYLES = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    left: SIZES.phoneDimensions.width / 10,
    backgroundColor: COLORS.black,
    marginBottom: SIZES.margin * 3,
    borderRadius: SIZES.border * 3,
    borderTopWidth: 1,
    borderTopColor: COLORS.black,
    height: 60,
    width: "80%",
    paddingBottom: SIZES.padding / 2,
    shadowColor: COLORS.white,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  tabBarLabelStyle: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body4,
  },
});
