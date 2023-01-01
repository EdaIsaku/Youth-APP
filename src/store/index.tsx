import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);

const showRealAppAtom = atomWithStorage("showRealApp", false, storage);
const showModalAtom = atomWithStorage("showModalApp", false, storage);

export { showRealAppAtom, showModalAtom };
