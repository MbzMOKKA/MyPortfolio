//Imports
import { createSlice } from '@reduxjs/toolkit';

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

interface PrefModal {
    opened: boolean;
}

interface InitialState {
    contentModal: ContentModal;
    prefModal: PrefModal;
}

//Slice
const initialState: InitialState = {
    contentModal: {
        opened: false,
        type: MODAL_TYPES.work,
        params: {},
    },
    prefModal: {
        opened: false,
    },
};

const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openContentModal: (state, action) => {
            state.contentModal.opened = true;
            state.contentModal.type = action.payload.type;
            state.contentModal.params = action.payload.params;
        },
        closeModals: (state) => {
            state.prefModal.opened = false;
            state.contentModal.opened = false;
        },
    },
});

export const { openContentModal, closeModals } = modalSlice.actions;
export default modalSlice.reducer;

//Selectors
export const selectContentModal = (state: any) => state.modals.contentModal;
