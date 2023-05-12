//Imports
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/languageSlice';
import modalsReducer from '../features/modalsSlice';

export default configureStore({
    reducer: {
        language: languageReducer,
        modals: modalsReducer,
    },
});
