//Imports
import {
    selectSettingsLoaded,
    selectSettings,
    selectLanguage,
    setLanguage,
    localStorageLoad,
    localStorageLoaded,
} from "./settingSlice";
import {
    openContentModal,
    closeModals,
    openSettings,
    closeSettings,
    MODAL_TYPES,
    selectContentModal,
    selectSettingsModal,
} from "./modalsSlice";
import { selectScreenType, setScreenType } from "./miscSlice";

//Fast-to-import modules
export {
    selectLanguage,
    setLanguage,
    MODAL_TYPES,
    openContentModal,
    closeModals,
    openSettings,
    closeSettings,
    selectContentModal,
    selectSettingsModal,
    selectSettingsLoaded,
    selectSettings,
    localStorageLoad,
    localStorageLoaded,
    selectScreenType,
    setScreenType,
};
