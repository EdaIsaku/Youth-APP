import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import PhoneInput, { isValidNumber } from "react-native-phone-number-input";
import { COLORS, SIZES } from "../../theme/theme";
import { CustomButton } from "./CustomButton";
import { phoneNumberAtom, codeSendAtom } from "../store";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

const BASE_URL = "http://192.168.1.89:3000";

export const PhoneNumber = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const [codeSend, setCodeSend] = useAtom(codeSendAtom);

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
        console.log("res", res);
      });
  };

  useEffect(() => {
    setCodeSend((prev: any) => (prev ? RESET : false));
  }, [codeSend]);

  const handlePress = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setValid(checkValid ? checkValid : false);
    let formatedNumber =
      phoneInput.current?.getNumberAfterPossiblyEliminatingZero()
        .formattedNumber;
    setPhoneNumber(formatedNumber);
    if (valid) {
      sendCode(phoneNumber);
      setCodeSend(true);
    }
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
