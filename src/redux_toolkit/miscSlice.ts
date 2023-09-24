//Imports
import { createSlice } from "@reduxjs/toolkit";

//Types
export enum SCREEN_TYPES {
    mobile,
    tablet,
    laptop,
    desktop,
}

//Slice
const initialState = {
    screenType: SCREEN_TYPES.mobile,
};

const miscSlice = createSlice({
    name: "misc",
    initialState,
    reducers: {
        setScreenType: (state, action) => {
            state.screenType = action.payload;
        },
    },
});

export const { setScreenType } = miscSlice.actions;
export default miscSlice.reducer;

//Selectors
export const selectScreenType = (state: any) => state.misc.screenType;
