//Imports
import React from 'react';
import { StyledNavBar, StyledButtonContainer } from './style';
import NavButton from '../NavButton';
import { STRING_IDS } from '../../../data/locales/stringIds';
import iconHome from '../../../assets/images/icons/blue_repicthousebase_1484336386-1.png';
import iconWorks from '../../../assets/images/icons/folder-icon-512x410-jvths5l6.png';
import iconSkills from '../../../assets/images/icons/icone-de-service-violette.png';
import iconContact from '../../../assets/images/icons/phone-icon-1024x1024-bn4mirqi.png';

//Component of the site navigation bar
export default function NavBar() {
    return (
        <StyledNavBar>
            <StyledButtonContainer>
                <NavButton icon={iconHome} pathname="" nameId={STRING_IDS.pageHome} index={0} />
                <NavButton icon={iconWorks} pathname="work" nameId={STRING_IDS.pageWorks} index={1} />
                <NavButton icon={iconSkills} pathname="skill" nameId={STRING_IDS.pageSkills} index={2} />
                <NavButton icon={iconContact} pathname="contact" nameId={STRING_IDS.pageContact} index={3} />
            </StyledButtonContainer>
        </StyledNavBar>
    );
}
