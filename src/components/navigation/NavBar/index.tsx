//Imports
import React from "react";
import { StyledNavBar, StyledButtonContainer } from "./style";
import { NavButton } from "../";
import { ICONS } from "../../../assets/images";

//Component of the site's navigation bar
export default function NavBar() {
    return (
        <StyledNavBar>
            <StyledButtonContainer>
                <NavButton
                    icon={ICONS.home}
                    pathname=""
                    name={`Accueil`}
                    index={0}
                />
                <NavButton
                    icon={ICONS.works}
                    pathname="work"
                    name={`Travaux`}
                    index={1}
                />
                <NavButton
                    icon={ICONS.skills}
                    pathname="skill"
                    name={`Compétences`}
                    index={2}
                />
                <NavButton
                    icon={ICONS.contact}
                    pathname="contact"
                    name={`Contact`}
                    index={3}
                />
            </StyledButtonContainer>
        </StyledNavBar>
    );
}
