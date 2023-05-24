//Imports
import { createSlice } from "@reduxjs/toolkit";

//Types
export enum MODAL_TYPES {
    work = 0,
    skill = 1,
}

interface ContentModal {
    opened: boolean;
    type: MODAL_TYPES;
    params: any;
}

interface SettingsModal {
    opened: boolean;
}

interface InitialState {
    contentModal: ContentModal;
    settingsModal: SettingsModal;
}

//Slice
const initialState: InitialState = {
    contentModal: {
        opened: false,
        type: MODAL_TYPES.work,
        params: {},
    },
    settingsModal: {
        opened: false,
    },
};

const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        openContentModal: (state, action) => {
            state.contentModal.opened = true;
            state.contentModal.type = action.payload.type;
            state.contentModal.params = action.payload.params;
        },
        closeModals: (state) => {
            state.settingsModal.opened = false;
            state.contentModal.opened = false;
        },
        openSettings: (state) => {
            state.settingsModal.opened = true;
        },
        closeSettings: (state) => {
            state.settingsModal.opened = false;
        },
    },
});

export const { openContentModal, closeModals, openSettings, closeSettings } =
    modalSlice.actions;
export default modalSlice.reducer;

//Selectors
export const selectContentModal = (state: any) => state.modals.contentModal;
export const selectSettingsModal = (state: any) => state.modals.settingsModal;
