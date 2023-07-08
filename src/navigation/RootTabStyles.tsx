import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";

export const STYLES = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    paddingHorizontal: 10,
    left: SIZES.phoneDimensions.width / 10,
    backgroundColor: COLORS.white,
    marginBottom: SIZES.margin * 2,
    borderRadius: SIZES.border * 3,
    borderTopWidth: 1,
    borderTopColor: COLORS.white,
    height: 50,
    width: "80%",
    paddingBottom: SIZES.padding / 2,
    paddingTop: SIZES.padding / 2,
    shadowColor: COLORS.lightGrey,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  tabBarLabelStyle: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body6,
  },
});
