//Imports
import { configureStore } from "@reduxjs/toolkit";
import { languageReducer, modalsReducer } from "../features";

export default configureStore({
    reducer: {
        language: languageReducer,
        modals: modalsReducer,
    },
});
