import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);

const showRealAppAtom = atomWithStorage("showRealApp", false, storage);
const allowNotificationAtom = atomWithStorage(
  "allowNotifcation",
  true,
  storage
);
const allowLocationAtom = atomWithStorage("allowlocation", false, storage);
const phoneNumberAtom = atomWithStorage("phoneNumber", "", storage);
const photoURLAtom = atomWithStorage("photoURL", null, storage);

export {
  showRealAppAtom,
  allowNotificationAtom,
  allowLocationAtom,
  phoneNumberAtom,
  photoURLAtom,
};
