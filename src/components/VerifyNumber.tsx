import { CustomButton } from "./CustomButton";
import { COLORS, SIZES } from "../../theme/theme";
import React, { useState } from "react";
import { Animated, SafeAreaView, StyleSheet, Platform } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { phoneNumberAtom, showRealAppAtom } from "../store";
import { useAtom } from "jotai";

const { Value, Text: AnimatedText } = Animated;
const CELL_COUNT = 4;
const BASE_URL = "http://192.168.0.103:3000";

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

const animateCell = ({
  hasValue,
  index,
  isFocused,
}: {
  hasValue: any;
  index: any;
  isFocused: any;
}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
    }),
  ]).start();
};

export const VerifyNumber = () => {
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const [showRealApp, setShowRealApp] = useAtom(showRealAppAtom);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handlePress = () => {
    fetch(`${BASE_URL}/check/${phoneNumber}/${value}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.status === "approved");

        if (res.status === "approved") {
          setShowRealApp(true);
        } else {
          console.log("resend code");
        }
      });
  };

  const renderCell = ({
    index,
    symbol,
    isFocused,
  }: {
    index: any;
    symbol: any;
    isFocused: any;
  }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [COLORS.white, COLORS.primary],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [COLORS.white, COLORS.white],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.cellSize, SIZES.border],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <CustomButton buttonText="Finish" handlePress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  codeFieldRoot: {
    height: SIZES.cellSize,
    marginTop: SIZES.margin * 4,
    paddingHorizontal: SIZES.padding * 2,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: SIZES.cellSize,
    width: SIZES.cellSize,
    lineHeight: SIZES.cellSize - 5,
    ...Platform.select({ web: { lineHeight: 65 } }),
    fontSize: 30,
    textAlign: "center",
    borderRadius: SIZES.border - 2,
    color: "#3759b8",
    backgroundColor: "#fff",
    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // Android
    elevation: 3,
  },
});
