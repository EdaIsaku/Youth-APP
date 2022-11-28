import { RootTab } from "./src/navigation/RootTab";
import { Provider } from "jotai";
import { Suspense } from "react";

import { ActivityIndicator } from "react-native";

export default function App() {
  return (
    <Suspense fallback={<ActivityIndicator size={"large"} color="teal" />}>
      <Provider>
        <RootTab />
      </Provider>
    </Suspense>
  );
}
