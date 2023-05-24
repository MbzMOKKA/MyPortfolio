//Imports
import React from "react";
import { StyledButton } from "./style";
import { ICONS } from "../../../assets/images/icons";

//Types
type CloseButtonProps = {
    onClick: () => void;
};

//Component of a close button
export default function CloseButton(props: CloseButtonProps) {
    const { onClick } = props;

    return (
        <StyledButton onClick={onClick}>
            <img src={ICONS.cross} alt="close" />
        </StyledButton>
    );
}
