//Imports
import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./settingSlice";
import modalsReducer from "./modalsSlice";

export default configureStore({
    reducer: {
        settings: settingReducer,
        modals: modalsReducer,
    },
});
