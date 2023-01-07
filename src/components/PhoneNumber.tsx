import React, { useState, useRef } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { COLORS, SIZES } from "../../theme/theme";
import { CustomButton } from "./CustomButton";
import { phoneNumberAtom } from "../store";
import { useAtom } from "jotai";

const BASE_URL = "http://192.168.0.106:3000";

export const PhoneNumber = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);

  const handleChangeText = (text: string) => {
    setValue(text);
  };

  const sendCode = (number: any) => {
    fetch(`${BASE_URL}/verify/${number}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      });
  };

  const verifyCode = () => {};

  const handlePress = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setValid(checkValid ? checkValid : false);
    let formatedNumber =
      phoneInput.current?.getNumberAfterPossiblyEliminatingZero()
        .formattedNumber;
    setPhoneNumber(formatedNumber);
    // sendCode(formatedNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultCode="AL"
        layout="first"
        autoFocus={isFocused}
        onChangeText={handleChangeText}
        countryPickerProps={{ withAlphaFilter: true }}
        containerStyle={styles.flagContainer}
        codeTextStyle={styles.codeText}
        textInputStyle={styles.textInput}
        textContainerStyle={styles.textContainer}
      />
      <CustomButton buttonText="continue" handlePress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 200,
    marginTop: 50,
  },
  flagContainer: {
    borderRadius: 5,
    borderColor: COLORS.lightGrey,
  },
  textContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGrey,
    borderBottomWidth: 1,
  },
  textInput: {
    fontFamily: "Lato-Bold",
    fontSize: SIZES.body3,
  },
  codeText: {
    fontFamily: "Lato-Bold",
    fontSize: SIZES.body3,
  },
});
