import { Camera, CameraType } from "expo-camera";
import { useState, useRef, useEffect, useCallback } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { ICONS } from "../constants";
import { COLORS, POSITION, SIZES } from "../../theme/theme";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useAtom } from "jotai";
import { photoURIAtom } from "../store";

export const CustomCamera = () => {
  const navigation = useNavigation();
  const cameraRef = useRef<any>(null);
  const [type, setType] = useState(CameraType.front);

  const [cameraPermission, setCameraPermission] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [photoURI, setphotoURI] = useAtom(photoURIAtom);
  const [preview, setPreview] = useState(undefined);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);
  //remove tabBar from Camera Screen
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
    }, [])
  );
  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const takePhoto = async () => {
    let newPhoto = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    setPreview(newPhoto.uri);
  };
  const handleClose = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      {preview ? (
        <Image source={{ uri: preview }} style={styles.cameraContainer}></Image>
      ) : (
        <Camera
          style={styles.cameraContainer}
          ref={cameraRef}
          type={type}
          onCameraReady={() => {
            setIsCameraReady(true);
          }}
        />
      )}
      <View style={styles.takePhotoContainer}>
        <TouchableOpacity
          onPress={
            preview
              ? () => {
                  setphotoURI(null), setPreview(undefined);
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
          <View style={styles.captureIconContainer}>
            <TouchableOpacity
              onPress={takePhoto}
              style={{
                ...SIZES.fullSize,
                ...POSITION.center,
              }}
            >
              <Image source={ICONS.photo} style={styles.captureIcon}></Image>
            </TouchableOpacity>
          </View>
        )}
        {preview ? (
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 30,
            }}
            onPress={() => {
              navigation.goBack();
              setphotoURI(preview);
            }}
          >
            <Text style={styles.text}>Use Photo</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              toggleCameraType();
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
    ...POSITION.center,
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
    ...POSITION.center,
  },
  captureIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.white,
    ...POSITION.center,
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
    width: "80%",
    height: "80%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.black,
    tintColor: COLORS.white,
  },
});
