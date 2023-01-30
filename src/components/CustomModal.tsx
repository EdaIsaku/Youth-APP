import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ICONS } from "../constants";
import { COLORS, SIZES } from "../../theme/theme";
import Modal from "react-native-modal";

export const CustomModal = ({
  isVisible,
  hasProfilePicture,
  handleOpenCamera,
  handleOpenGallery,
  handleDelete,
  handleClose,
}: {
  isVisible: boolean;
  hasProfilePicture: boolean;
  handleOpenCamera: any;
  handleOpenGallery: any;
  handleDelete: any;
  handleClose: any;
}) => {
  let ACTIONS = [
    { action: "Take Photo", icon: ICONS.camera },
    { action: "Choose Photo", icon: ICONS.gallery },
    ...(hasProfilePicture
      ? [{ action: "Delete Photo", icon: ICONS.delete }]
      : []),
    { action: "Cancel", icon: ICONS.close },
  ];

  const handleClick = (action: string) => {
    switch (action) {
      case "Take Photo":
        handleOpenCamera();
        break;
      case "Choose Photo":
        handleOpenGallery();
        break;
      case "Delete Photo":
        handleDelete();
        break;
      case "Cancel":
        handleClose();
    }
  };
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        swipeDirection={"down"}
        onBackdropPress={handleClose}
        onSwipeComplete={handleClose}
        style={{ margin: 0 }}
      >
        <View style={styles.container}>
          <View style={styles.topLine}></View>
          <View style={styles.modalView}>
            {ACTIONS.map((el, idx) => {
              return (
                <TouchableOpacity
                  key={idx}
                  style={styles.actionContainer}
                  onPress={() => handleClick(el.action)}
                >
                  <Image source={el.icon} style={styles.icon}></Image>
                  <Text style={styles.modalText}>{el.action}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.fullSize.width,
    height: "35%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#232323",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  actionContainer: {
    width: "100%",
    flexDirection: "row",
    flexGrow: 4,
    alignItems: "center",
    borderBottomColor: "rgba(255,255,255,0.05)",
    borderBottomWidth: 1,
    paddingLeft: 20,
  },
  topLine: {
    position: "absolute",
    zIndex: 1,
    top: 5,
    width: 40,
    height: 3,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 5,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: COLORS.secondary,
    marginRight: 20,
  },
  modalText: {
    fontSize: SIZES.body2,
    color: COLORS.white,
  },
});
