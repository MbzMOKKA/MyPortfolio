//Imports
import { createSlice } from '@reduxjs/toolkit';

//Slice
const languageSlice = createSlice({
    name: 'language',
    initialState: { selected: 'en' },
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
