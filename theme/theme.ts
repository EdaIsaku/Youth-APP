import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SIZES = {
  sm: 10,
  md: 20,
  l: 26,
  xl: 30,
  xxl: 50,

  padding: 15,
  margin: 10,
};

export const COLORS = {
  primary: "#462964",
  secondary: "#9C54D5",
  third: "#5EE2F0",

  //base
  white: "#fff",
  black: "#000",
  grey: "#4d4d4d",
  lightGrey: "#ccc",
};
