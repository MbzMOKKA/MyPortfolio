//Imports
import React from "react";
import { StyledNavButton } from "./style";
import { capString } from "../../../utils/misc";
import { usePage, useText } from "../../../utils/hooks";
import { useSelector } from "react-redux";
import { selectScreenType } from "../../../redux_toolkit";
import { SCREEN_TYPES } from "../../../redux_toolkit/miscSlice";

//Types
type NavButtonProps = {
    icon: string;
    pathname: string;
    nameId: string;
    index: number;
};

//Component of the site navigation bar
export default function NavButton({
    icon,
    pathname,
    nameId,
    index,
}: NavButtonProps) {
    const { currentPagename } = usePage();
    const { renderText } = useText();
    const screenType = useSelector(selectScreenType);

    return (
        <StyledNavButton
            to={"/" + pathname}
            index={index}
            selected={currentPagename === pathname}
        >
            <img src={icon} alt="" draggable={false} />
            <p>
                {capString(
                    renderText(nameId),
                    screenType <= SCREEN_TYPES.tablet ? 7 : undefined
                )}
            </p>
        </StyledNavButton>
    );
}
