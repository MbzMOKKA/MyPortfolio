//Imports
import React from "react";
import { StyledButton } from "./style";
import { ICONS } from "../../../assets/images";

//Types
type CloseButtonProps = {
    onClick: () => void;
};

//Component of a close button
export default function CloseButton({ onClick }: CloseButtonProps) {
    return (
        <StyledButton onClick={onClick}>
            <img src={ICONS.cross} alt="close" draggable={false} />
        </StyledButton>
    );
}
