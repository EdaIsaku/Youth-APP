import { RootTab } from "./src/navigation/RootTab";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <RootTab />
    </Provider>
  );
}
