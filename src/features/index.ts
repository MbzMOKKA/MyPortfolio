//Imports
import settingReducer, {
    selectSettingsLoaded,
    selectSettings,
    selectLanguage,
    setLanguage,
    localStorageLoaded,
} from "./settingSlice";
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
    settingReducer,
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
    selectSettingsLoaded,
    selectSettings,
    localStorageLoaded,
};
