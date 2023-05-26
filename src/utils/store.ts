//Imports
import { configureStore } from "@reduxjs/toolkit";
import { settingReducer, modalsReducer } from "../features";

export default configureStore({
    reducer: {
        settings: settingReducer,
        modals: modalsReducer,
    },
});
