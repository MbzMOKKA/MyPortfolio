//Imports
import { createSlice } from "@reduxjs/toolkit";
import { LANG } from "../data/locales/stringIds";

//Slice
const initialState = {
    loaded: false,
    language: LANG.fr,
};

const settingSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        localStorageLoad: (state, action) => {
            //const settings = JSON.parse(action.payload);
            //state.language = settings.language;
        },
        localStorageLoaded: (state) => {
            state.loaded = true;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage, localStorageLoad, localStorageLoaded } =
    settingSlice.actions;
export default settingSlice.reducer;

//Selectors
export const selectSettings = (state: any) => state.settings;
export const selectSettingsLoaded = (state: any) => state.settings.loaded;
export const selectLanguage = (state: any) => state.settings.language;
