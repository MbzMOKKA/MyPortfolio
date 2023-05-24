//Imports
import { createSlice } from "@reduxjs/toolkit";
import { LANG } from "../data/locales/stringIds";

//Slice
const initialState = {
    selected: LANG.en,
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

//Selectors
export const selectLanguage = (state: any) => state.language.selected;
