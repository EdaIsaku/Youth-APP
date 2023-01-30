import Toast from "react-native-toast-message";
export const showToast = (message: string) => {
  Toast.show({
    type: "success",
    text1: message,
    // text2: "This is some something 👋",
  });
};
