import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage<any>(() => AsyncStorage);

const showRealAppAtom = atomWithStorage<boolean>("showRealApp", false, storage);
const allowNotificationAtom = atomWithStorage(
  "allowNotifcation",
  false,
  storage
);
// const allowLocationAtom = atomWithStorage("allowlocation", false, storage);
const scrollEnabledAtom = atomWithStorage<boolean>(
  "scrollEnabled",
  true,
  storage
);
const phoneNumberAtom = atomWithStorage("phoneNumber", "", storage);
const codeSendAtom = atomWithStorage<boolean>("codeSend", false, storage);
const photoURIAtom = atomWithStorage("photoURI", null, storage);

export {
  showRealAppAtom,
  allowNotificationAtom,
  // allowLocationAtom,
  scrollEnabledAtom,
  phoneNumberAtom,
  codeSendAtom,
  photoURIAtom,
};
