import { createSlice } from "@reduxjs/toolkit";

type SettingsSlice = {
  showRealApp: boolean;
};

const initialState: SettingsSlice = {
  showRealApp: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setShowRealApp(state, action) {
      state.showRealApp = action.payload;
    },
  },
});

export const { setShowRealApp } = settingsSlice.actions;

export default settingsSlice.reducer;
