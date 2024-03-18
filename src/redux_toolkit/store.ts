//Imports
import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "./miscSlice";

//Store
export default configureStore({
    reducer: {
        misc: miscSlice,
    },
});
