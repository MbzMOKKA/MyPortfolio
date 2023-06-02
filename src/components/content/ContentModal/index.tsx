//Imports
import React from "react";
import { StyledModal, StyledClose } from "./style";
import { MODAL_TYPES, selectContentModal } from "../../../redux_toolkit";
import { useSelector } from "react-redux";
import { usePage } from "../../../utils/hooks";
import { WorkModal } from "../";

//Component of modals of skills and works
export default function ContentModal() {
    const { opened, type, params } = useSelector(selectContentModal);
    const { currentPagename } = usePage();

    if (opened === false) {
        return null;
    }

    function renderModalContent() {
        switch (type) {
            case MODAL_TYPES.work:
                return <WorkModal params={params} />;
            default:
                return null;
        }
    }

    return (
        <StyledModal>
            <StyledClose to={"/" + currentPagename}>X</StyledClose>
            {renderModalContent()}
        </StyledModal>
    );
}
