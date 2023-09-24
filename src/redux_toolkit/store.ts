//Imports
import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./settingSlice";
import modalsReducer from "./modalsSlice";
import miscSlice from "./miscSlice";

//Store
export default configureStore({
    reducer: {
        settings: settingReducer,
        modals: modalsReducer,
        misc: miscSlice,
    },
});
