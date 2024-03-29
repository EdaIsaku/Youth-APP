import { CustomButton } from "./CustomButton";
import { COLORS, SIZES } from "../../theme/theme";
import React, { useState, useEffect } from "react";
import { Animated, SafeAreaView, StyleSheet, Platform } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Toast, { BaseToast } from "react-native-toast-message";

import { phoneNumberAtom, showRealAppAtom } from "../store";
import { useAtom } from "jotai";

const { Value, Text: AnimatedText } = Animated;
const CELL_COUNT = 4;
const BASE_URL = "http://192.168.1.113:3000";

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

const animateCell = ({
  hasValue,
  index,
  isFocused,
}: {
  hasValue: boolean;
  index: number;
  isFocused: boolean;
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

  useEffect(() => {
    setShowRealApp((prev: any) => false);
  }, []);

  const toastConfig = {
    info: (props: any) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "orange" }}
        text1Style={{
          fontSize: 15,
          color: "orange",
        }}
        text2Style={{
          fontSize: 13,
          paddingTop: 3,
        }}
      />
    ),
  };

  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "Warning",
      text2: "Please check messages and write code again!",
      position: "bottom",
      bottomOffset: 350,
    });
  };

  const handlePress = () => {
    if (value.length == 4)
      fetch(`${BASE_URL}/check/${phoneNumber}/${value}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === "approved") {
            setShowRealApp(true);
          } else {
            showToast();
            setValue("");
          }
        });
  };

  const renderCell = ({
    index,
    symbol,
    isFocused,
  }: {
    index: number;
    symbol: any;
    isFocused: boolean;
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
      <Toast config={toastConfig} />
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
    color: COLORS.secondary,
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
