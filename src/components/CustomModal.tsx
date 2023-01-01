import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, SIZES } from "../../theme/theme";
import GestureRecognizer from "react-native-swipe-gestures";
import { PhoneNumber } from "./PhoneNumber";

export const CustomModal = ({
  modalTitle,
  onClose,
  showModal,
}: {
  modalTitle: string;
  onClose: Function;
  showModal: any;
}) => {
  // const [showModal, setShowModal] = useAtom(showModalAtom);
  // const [showModal, setShowModal] = useState(false);

  const _closeModal = () => {
    onClose(false);
  };
  return (
    <GestureRecognizer onSwipeDown={_closeModal} style={styles.centeredView}>
      <Modal animationType="slide" visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={_closeModal} style={styles.buttonClose}>
              <Image
                style={styles.closeIcon}
                source={require("../../assets/icons/close.png")}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <PhoneNumber />
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.darkGrey,
    padding: SIZES.padding,
    paddingBottom: 150,
    alignItems: "center",
    justifyContent: "space-around",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    top: 15,
    backgroundColor: "red",
  },
  closeIcon: {
    width: "60%",
    height: "60%",
    tintColor: "#fff",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    color: COLORS.white,
    fontSize: SIZES.body2,
    fontFamily: "Lato-Regular",
    lineHeight: 35,
    // textTransform: "uppercase",
  },
});
