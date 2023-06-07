//Imports
import React from "react";
import { StyledButton } from "./style";
import { openSettings } from "../../../redux_toolkit";
import { useDispatch } from "react-redux";
import { ICONS } from "../../../assets/images";

//Component of the open settings button
export default function SettingsButton() {
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
