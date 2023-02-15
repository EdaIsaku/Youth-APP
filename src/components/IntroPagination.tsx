import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Location from "expo-location";
import { SLIDES } from "../constants";
import { COLORS, FONTS } from "../../theme/theme";
import { CustomIntroButton } from "./CustomIntroButton";
import { SIZES } from "../../theme/theme";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import {
  allowNotificationAtom,
  allowLocationAtom,
  phoneNumberAtom,
  codeSendAtom,
} from "../store";

export const IntroPagination = ({
  activeIndex,
  slider,
}: {
  activeIndex: number;
  slider: any;
}) => {
  let buttonText = "";
  const [allowNotifcation, setAllowNotification] = useAtom(
    allowNotificationAtom
  );
  const [allowLocation, setAllowLocation] = useAtom(allowLocationAtom);
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const [codeSend, setCodeSend] = useAtom(codeSendAtom);

  switch (activeIndex) {
    case 1:
      buttonText = "Allow Notification";
      break;
    case 2:
      buttonText = "Allow Location";
      break;
    default:
      buttonText = "";
  }

  const handleNotificationPermission = async () => {
    const settings = await Notifications.getPermissionsAsync();
    if (settings.granted) {
      setAllowNotification(true);
    } else {
      Linking.openSettings();
    }
  };

  const handleLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      setAllowLocation(true);
    } else {
      Linking.openSettings();
    }
  };

  useEffect(() => {
    if (activeIndex === 3) {
      codeSend && goToNextSlide();
    }
  }, [codeSend]);
  // useEffect(() => {
  //   console.log(
  //     "allowLocation: ",
  //     allowLocation,
  //     "allowNotifcation: ",
  //     allowNotifcation
  //   );

  //   setAllowLocation((prev) => (prev ? RESET : false));
  //   setAllowNotification((prev) => (prev ? false : false));
  // }, []);

  const handleSkip = () => {
    slider.current.goToSlide(activeIndex + 1);
  };
  const goToNextSlide = () => {
    slider.current.goToSlide(activeIndex + 1);
  };
  const handleNextPress = () => {
    switch (activeIndex) {
      case 0:
        goToNextSlide();
        break;
      case 1:
        allowNotifcation ? goToNextSlide() : handleNotificationPermission();
        break;
      case 2:
        allowLocation ? goToNextSlide() : handleLocationPermission();
        break;
    }
  };

  return (
    <View style={styles.paginationContainer}>
      <SafeAreaView>
        <View style={styles.paginationDots}>
          {SLIDES.length > 1 &&
            SLIDES.map((_, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  slider?.current.goToSlide(i, true);
                }}
                style={[
                  styles.dot,
                  i === activeIndex ? styles.activeDot : styles.inactiveDot,
                ]}
              ></TouchableOpacity>
            ))}
        </View>

        <View style={styles.buttonContainer}>
          {activeIndex === 1 || activeIndex === 2 ? (
            <TouchableOpacity style={styles.skip} onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
          {activeIndex !== 3 && activeIndex !== 4 && (
            <CustomIntroButton
              handleNextPress={handleNextPress}
              buttonText={buttonText}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: "absolute",
    bottom: SIZES.md,
    left: SIZES.md,
    right: SIZES.md,
  },
  paginationDots: {
    bottom: 130,
    left: SIZES.md,
    right: SIZES.md,
    position: "absolute",
    height: SIZES.md,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: SIZES.margin / 2,
  },
  activeDot: {
    width: 45,
    backgroundColor: COLORS.secondary,
  },
  inactiveDot: {
    width: 10,
    backgroundColor: COLORS.lightGrey,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: SIZES.margin,
    marginBottom: SIZES.margin * 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  skip: {
    padding: SIZES.padding,
  },
  skipText: {
    color: COLORS.primary,
    ...FONTS.body2,
  },
});
