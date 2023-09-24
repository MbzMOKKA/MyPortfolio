//Imports
import React from "react";
import { StyledNavBar, StyledButtonContainer } from "./style";
import { NavButton } from "../";
import { STRING_IDS } from "../../../data/locales/stringIds";
import { ICONS } from "../../../assets/images";

//Component of the site's navigation bar
export default function NavBar() {
    return (
        <StyledNavBar>
            <StyledButtonContainer>
                <NavButton
                    icon={ICONS.home}
                    pathname=""
                    nameId={STRING_IDS.pageHome}
                    index={0}
                />
                <NavButton
                    icon={ICONS.works}
                    pathname="work"
                    nameId={STRING_IDS.pageWorks}
                    index={1}
                />
                <NavButton
                    icon={ICONS.skills}
                    pathname="skill"
                    nameId={STRING_IDS.pageSkills}
                    index={2}
                />
                <NavButton
                    icon={ICONS.contact}
                    pathname="contact"
                    nameId={STRING_IDS.pageContact}
                    index={3}
                />
            </StyledButtonContainer>
        </StyledNavBar>
    );
}
