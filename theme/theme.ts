import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SIZES = {
  sm: 10,
  md: 16,
  lg: 25,
  xl: 35,

  padding: 10,
  margin: 10,
  border: 10,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  fullSize: {
    width: "100%",
    height: "100%",
  },

  phoneDimensions: {
    width,
    height,
  },
};

export const COLORS = {
  primary: "#462964",
  secondary: "#a044ff",
  // secondary: "#9C54D5",
  third: "#5EE2F0",

  //base
  white: "#fff",
  black: "#000",
  transparentBlack: "rgba(0,0,0,0.5)",
  darkGrey: "#0e0e0e",
  grey: "#4d4d4d",
  lightGrey: "#ccc",
};

export const FONTS = {
  largeTitle: { fontFamily: "Lato-Black", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Lato-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Lato-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Lato-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Lato-Medium", fontSize: SIZES.h4, lineHeight: 20 },
  body1: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body1,
    // lineHeight: 36,
  },
  body2: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body2,
    // lineHeight: 30,
  },
  body3: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body3,
    // lineHeight: 22,
  },
  body4: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body4,
    // lineHeight: 22,
  },
  body5: {
    fontFamily: "Lato-Regular",
    fontSize: SIZES.body5,
    // lineHeight: 22,
  },
  body5Thin: {
    fontFamily: "Lato-Black",
    fontSize: SIZES.body5,
    // lineHeight: 22,
  },
  body5Light: {
    fontFamily: "Lato-Thin",
    fontSize: SIZES.body5,
    // lineHeight: 22,
  },
};
