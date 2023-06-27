import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import { ICONS, SETTINGS, IMAGES } from "../constants";
import { CustomModal, SettingsElement } from "../components";
import * as ImagePicker from "expo-image-picker";
import { STYLES } from "../navigation/RootTabStyles";
import { useAtom } from "jotai";
import { photoURIAtom } from "../store";

interface ImageURISource {
  uri?: string | undefined;
}

export const User = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { username } = route.params;
  const [isVisible, setIsVisible] = useState(false);
  const [photoURI, setPhotoURI] = useAtom(photoURIAtom);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          ...STYLES.tabBarStyle,
          display: "flex",
        },
      });
    }, [])
  );
  const handleEdit = () => {
    setIsVisible(true);
  };
  const handleOpenCamera = () => {
    navigation.navigate("CustomCamera");
    setIsVisible(false);
  };
  const handleOpenGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      // base64: true,
    });
    if (!result.canceled) {
      setPhotoURI(result.assets[0].uri);
      setIsVisible(false);
    }
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleDelete = () => {
    Alert.alert("Are you sure you want to delete profile picture?", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          setPhotoURI("");
          setIsVisible(false);
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomModal
        isVisible={isVisible}
        hasProfilePicture={Boolean(photoURI)}
        handleOpenCamera={handleOpenCamera}
        handleOpenGallery={handleOpenGallery}
        handleClose={handleClose}
        handleDelete={handleDelete}
      ></CustomModal>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.userContainer}>
        <View style={styles.profilePictureContainer}>
          <TouchableOpacity
            style={styles.editIconContainer}
            onPress={handleEdit}
          >
            <Image source={ICONS.edit} style={styles.editIcon}></Image>
          </TouchableOpacity>
          {photoURI ? (
            <Image
              source={{ uri: photoURI }}
              style={styles.profilePicture}
            ></Image>
          ) : (
            <Image source={IMAGES.avatar} style={styles.avatarPicture}></Image>
          )}
        </View>
        <Text style={styles.name}>{username}</Text>
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
    backgroundColor: COLORS.white,
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
  avatarPicture: {
    width: "80%",
    height: "80%",
    borderRadius: 60,
  },
  name: {
    color: COLORS.white,
    fontFamily: "Lato-Regular",
    fontSize: SIZES.h1,
    paddingTop: 15,
  },
});
