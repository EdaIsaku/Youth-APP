import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";

export const STYLES = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    padding: 10,
    left: SIZES.phoneDimensions.width / 10,
    backgroundColor: COLORS.black,
    marginBottom: SIZES.margin * 3,
    borderRadius: SIZES.border * 3,
    borderTopWidth: 1,
    borderTopColor: COLORS.white,
    height: 60,
    width: "80%",
    paddingBottom: SIZES.padding / 2,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  tabBarLabelStyle: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body4,
  },
});
