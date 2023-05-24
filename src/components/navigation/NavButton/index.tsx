//Imports
import React from "react";
import { StyledNavButton } from "./style";
import { useTranslation } from "react-i18next";
import { capString } from "../../../utils/misc";
import { usePage } from "../../../utils/hooks";

//Types
type NavButtonProps = {
    icon: string;
    pathname: string;
    nameId: string;
    index: number;
};

//Component of the site navigation bar
export default function NavButton(props: NavButtonProps) {
    const { icon, pathname, nameId, index } = props;
    const { currentPagename } = usePage();
    const { t } = useTranslation();

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
