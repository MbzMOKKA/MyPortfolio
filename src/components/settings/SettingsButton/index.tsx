//Imports
import React from "react";
import { StyledButton } from "./style";
import { openSettings } from "../../../redux_toolkit";
import { useDispatch } from "react-redux";
import { ICONS } from "../../../assets/images";

//Component of a close button
export default function CloseButton() {
    const dispatch = useDispatch();

    return (
        <StyledButton
            onClick={() => {
                dispatch(openSettings());
            }}
        >
            <img src={ICONS.settings} alt="close" />
        </StyledButton>
    );
}
