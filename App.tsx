import React from "react";
import { RootTab } from "./src/navigation/RootTab";
import { Provider } from "jotai";
import { Suspense } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";

import { FONTS } from "./src/constants";

export default function App() {
  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return (
      <Suspense
        fallback={<ActivityIndicator size={"large"} color="teal" />}
      ></Suspense>
    );
  }

  return (
    <Suspense fallback={<ActivityIndicator size={"large"} color="teal" />}>
      <Provider>
        <RootTab />
        <Toast />
      </Provider>
    </Suspense>
  );
}
