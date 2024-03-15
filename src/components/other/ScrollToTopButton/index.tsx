//Imports
import React, { useState } from "react";
import { StyledButton } from "./style";
import { ICONS } from "../../../assets/images";

//Component of a close button
export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setShow(true);
        } else {
            setShow(false);
        }
    });

    return (
        <StyledButton onClick={scrollToTop} visible={show}>
            <img src={ICONS.scrollToTop} alt="Remonter la page" />
        </StyledButton>
    );
}
