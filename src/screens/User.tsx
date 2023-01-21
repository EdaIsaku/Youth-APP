import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import { ICONS, IMAGES, SETTINGS } from "../constants";
import { SettingsElement } from "../components";

export const User = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.userContainer}>
        <View style={styles.profilePictureContainer}>
          <TouchableOpacity style={styles.editIconContainer}>
            <Image source={ICONS.edit} style={styles.editIcon}></Image>
          </TouchableOpacity>
          <Image source={IMAGES.event1} style={styles.profilePicture}></Image>
        </View>
        <Text style={styles.name}>Eda Isaku</Text>
      </View>
      <View style={styles.settingsContainer}>
        {SETTINGS.map((el, idx) => {
          return (
            <SettingsElement
              key={idx}
              element={el.element}
              iconName={el.icon}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.darkGrey,
  },
  userContainer: {
    flex: 0.25,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  settingsContainer: {
    flex: 0.7,
    width: "90%",
    marginBottom: 80,
    justifyContent: "center",
  },
  editIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    position: "absolute",
    justifyContent: "center",
    right: 0,
    bottom: -5,
    zIndex: 1,
  },
  profilePictureContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    ...POSITION.center,
    borderColor: COLORS.secondary,
    borderWidth: 3,
  },
  title: {
    flex: 0.1,
    color: COLORS.white,
    fontSize: SIZES.h1,
    fontFamily: "Lato-Regular",
    paddingTop: 10,
  },
  editIcon: {
    width: "70%",
    height: "70%",
    tintColor: COLORS.white,
    alignSelf: "center",
  },
  profilePicture: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
  name: {
    color: COLORS.white,
    fontFamily: "Lato-Regular",
    fontSize: SIZES.h1,
    paddingTop: 15,
  },
});
