//Imports
import { createSlice } from '@reduxjs/toolkit';

//Types
type Language = {
    selected: 'fr' | 'en';
};

//Slice
const initialState: Language = {
    selected: 'en',
};

const languageSlice = createSlice({
    name: 'language',
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
