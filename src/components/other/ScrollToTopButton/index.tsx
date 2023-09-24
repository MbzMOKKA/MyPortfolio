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
        if (window.scrollY > 1) {
            setShow(true);
        } else {
            setShow(false);
        }
    });

    if (!show) {
        return null;
    }
    return (
        <StyledButton onClick={scrollToTop}>
            <img src={ICONS.scrollToTop} alt="close" />
        </StyledButton>
    );
}
