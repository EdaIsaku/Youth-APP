import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import * as Haptics from "expo-haptics";
import PhoneInput from "react-native-phone-number-input";
import { COLORS } from "../../dist/theme/theme";
import { SIZES } from "../../theme/theme";

export const PhoneNumber = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handleChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultCode="AL"
        layout="first"
        autoFocus={isFocused}
        onChangeText={handleChangeText}
        onChangeFormattedText={(text) => {
          setCountryCode(phoneInput.current?.getCountryCode() || "");
        }}
        countryPickerProps={{ withAlphaFilter: true }}
        containerStyle={styles.flagContainer}
        codeTextStyle={styles.codeText}
        textInputStyle={styles.textInput}
        textContainerStyle={styles.textContainer}
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.message}>
          * We'll text you a code to verify the phone number
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Haptics.selectionAsync();
            setIsFocused(true);
            const checkValid = phoneInput.current?.isValidNumber(value);
            setValid(checkValid ? checkValid : false);
            setCountryCode(phoneInput.current?.getCountryCode() || "AL");
            let getNumberAfterPossiblyEliminatingZero =
              phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
            console.log(getNumberAfterPossiblyEliminatingZero);
          }}
        >
          <Image
            source={require("../../assets/icons/right-arrow.png")}
            style={styles.arrowIcon}
          ></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "55%",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  flagContainer: {
    borderRadius: 5,
  },
  textContainer: {
    // backgroundColor: COLORS.black,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderColor: COLORS.white,
    borderWidth: 1,
  },
  textInput: {
    // color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.body3,
  },
  codeText: {
    // color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.body3,
  },
  message: {
    flex: 0.7,
    // color: COLORS.white,
    fontSize: SIZES.body3,
    fontFamily: "Lato-LightItalic",
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  arrowIcon: {
    width: "100%",
    height: "100%",
    tintColor: COLORS.primary,
  },
});
