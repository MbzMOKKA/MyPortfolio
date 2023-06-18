//Imports
import React from "react";
import { StyledButton } from "./style";
import { ICONS } from "../../../assets/images";

//Component of a close button
export default function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <StyledButton onClick={scrollToTop}>
            <img src={ICONS.cross} alt="close" />
        </StyledButton>
    );
}
