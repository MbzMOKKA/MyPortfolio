//Imports
import languageReducer, { selectLanguage, setLanguage } from "./languageSlice";
import modalsReducer, {
    openContentModal,
    closeModals,
    openSettings,
    closeSettings,
    MODAL_TYPES,
    selectContentModal,
    selectSettingsModal,
} from "./modalsSlice";

//Fast-to-import modules
export {
    languageReducer,
    selectLanguage,
    setLanguage,
    MODAL_TYPES,
    modalsReducer,
    openContentModal,
    closeModals,
    openSettings,
    closeSettings,
    selectContentModal,
    selectSettingsModal,
};
