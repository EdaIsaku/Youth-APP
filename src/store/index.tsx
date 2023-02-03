import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICONS } from "../constants";

const storage = createJSONStorage(() => AsyncStorage);

const showRealAppAtom = atomWithStorage("showRealApp", false, storage);
const allowNotificationAtom = atomWithStorage(
  "allowNotifcation",
  true,
  storage
);
const allowLocationAtom = atomWithStorage("allowlocation", false, storage);
const phoneNumberAtom = atomWithStorage("phoneNumber", "", storage);
const photoURIAtom = atomWithStorage("photoURI", null, storage);

export {
  showRealAppAtom,
  allowNotificationAtom,
  allowLocationAtom,
  phoneNumberAtom,
  photoURIAtom,
};
