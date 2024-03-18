//Imports
import React from "react";
import { StyledNavBar, StyledButtonContainer } from "./style";
import { NavButton } from "../";
import { ICONS } from "../../../assets/images";
import { STRINGS } from "../../../data";

//Component of the site's navigation bar
export default function NavBar() {
    return (
        <StyledNavBar>
            <StyledButtonContainer>
                <NavButton
                    icon={ICONS.home}
                    pathname=""
                    nameId={STRINGS.pageHome}
                    index={0}
                />
                <NavButton
                    icon={ICONS.works}
                    pathname="work"
                    nameId={STRINGS.pageWorks}
                    index={1}
                />
                <NavButton
                    icon={ICONS.skills}
                    pathname="skill"
                    nameId={STRINGS.pageSkills}
                    index={2}
                />
                <NavButton
                    icon={ICONS.contact}
                    pathname="contact"
                    nameId={STRINGS.pageContact}
                    index={3}
                />
            </StyledButtonContainer>
        </StyledNavBar>
    );
}
