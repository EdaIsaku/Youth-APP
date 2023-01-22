import React from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { ICONS } from "../constants";
import { COLORS, POSITION, SIZES } from "../../theme/theme";

const ACTIONS = [
  { action: "Take Photo", icon: ICONS.camera },
  { action: "Choose Photo", icon: ICONS.gallery },
  { action: "Delete Photo", icon: ICONS.delete },
  { action: "Cancel", icon: ICONS.close },
];

export const CustomModal = ({
  isVisible,
  handleClose,
}: {
  isVisible: boolean;
  handleClose: any;
}) => {
  const handleClick = (key: number) => {
    switch (key) {
      case 0:
        console.log("Open camera");
        break;
      case 1:
        console.log("Open gallery");
        break;
      case 2:
        console.log("Delete photo");
        break;
      case 3:
        handleClose();
    }
  };
  return (
    <View style={styles.centeredView}>
      <GestureRecognizer onSwipeDown={handleClose}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            handleClose;
          }}
        >
          <View style={styles.centeredView}>
            <View
              style={{
                position: "absolute",
                zIndex: 1,
                top: 5,
                width: 40,
                height: 3,
                backgroundColor: COLORS.lightGrey,
                borderRadius: 5,
              }}
            ></View>
            <View style={styles.modalView}>
              {ACTIONS.map((el, idx) => {
                return (
                  <TouchableOpacity
                    key={idx}
                    style={styles.actionContainer}
                    onPress={(ev) => handleClick(idx)}
                  >
                    <Image source={el.icon} style={styles.icon}></Image>
                    <Text style={styles.modalText}>{el.action}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    position: "absolute",
  },
  modalView: {
    width: "100%",
    height: "100%",
    margin: 20,
    backgroundColor: "#232323",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  actionContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    borderBottomColor: "rgba(255,255,255,0.05)",
    borderBottomWidth: 1,
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
