import { Camera, CameraType } from "expo-camera";
import { useState, useRef, useEffect, useCallback } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { ICONS, IMAGES } from "../constants";
import { COLORS, SIZES } from "../../theme/theme";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useAtom } from "jotai";
import { photoURLAtom } from "../store";

export const CustomCamera = () => {
  const navigation = useNavigation();
  const cameraRef = useRef<any>(null);
  const [type, setType] = useState(CameraType.front);
  const [cameraPermission, setCameraPermission] = useState(false);
  const [photoURL, setphotoURL] = useAtom(photoURLAtom);
  const [preview, setPreview] = useState(undefined);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
    }, [])
  );
  const toggleCameraType = (type: CameraType) => {
    type === "back" ? setType(CameraType.front) : setType(CameraType.back);
  };
  const takePhoto = async () => {
    let newPhoto = await cameraRef.current.takePictureAsync();
    setPreview(newPhoto.uri);
  };
  const handleClose = () => {
    navigation.goBack();
    setphotoURL(undefined);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      {preview ? (
        <Image source={{ uri: preview }} style={styles.cameraContainer}></Image>
      ) : (
        <Camera style={styles.cameraContainer} ref={cameraRef} type={type} />
      )}
      <View style={styles.takePhotoContainer}>
        <TouchableOpacity
          onPress={
            photoURL
              ? () => {
                  setphotoURL(null), setPreview(undefined);
                }
              : handleClose
          }
          style={{
            position: "absolute",
            left: 30,
          }}
        >
          <Text style={styles.text}>{preview ? "Retake" : "Cancel"} </Text>
        </TouchableOpacity>
        {preview ? (
          <></>
        ) : (
          <TouchableOpacity
            style={styles.captureIconContainer}
            onPress={takePhoto}
          >
            <Image source={ICONS.photo} style={styles.captureIcon}></Image>
          </TouchableOpacity>
        )}
        {preview ? (
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 30,
            }}
            onPress={() => {
              navigation.goBack();
              setphotoURL(preview);
            }}
          >
            <Text style={styles.text}>Use Photo</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              toggleCameraType(type);
            }}
            style={styles.flipIconContainer}
          >
            <Image source={ICONS.flip} style={styles.flipIcon}></Image>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.fullSize.width,
    height: SIZES.fullSize.height,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    width: "100%",
    height: "80%",
  },
  topContainer: {
    width: SIZES.fullSize.width,
    height: "5%",
    backgroundColor: COLORS.black,
  },
  takePhotoContainer: {
    width: SIZES.fullSize.width,
    height: "15%",
    backgroundColor: COLORS.black,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  captureIconContainer: {
    width: 70,
    height: 70,
  },
  flipIconContainer: {
    position: "absolute",
    right: 40,
    width: 30,
    height: 30,
  },
  text: {
    color: COLORS.white,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h3,
  },
  flipIcon: {
    ...SIZES.fullSize,
    tintColor: COLORS.lightGrey,
  },
  captureIcon: {
    ...SIZES.fullSize,
    tintColor: COLORS.white,
  },
});
