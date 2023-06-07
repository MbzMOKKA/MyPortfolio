//Imports
import React from "react";
import { StyledNavButton } from "./style";
import { capString } from "../../../utils/misc";
import { usePage, useText } from "../../../utils/hooks";

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
    const { t } = useText();

    return (
        <StyledNavButton
            to={"/" + pathname}
            index={index}
            selected={currentPagename === pathname}
        >
            <img src={icon} alt="" />
            <p>{capString(t(nameId), 7)}</p>
        </StyledNavButton>
    );
}
