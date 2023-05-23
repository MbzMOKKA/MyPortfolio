//Imports
import React from 'react';
import { StyledButton } from './style';
import iconCross from '../../../assets/images/icons/cross.png';

//Types
type CloseButtonProps = {
    onClick: () => void;
};

//Component of a close button
export default function CloseButton(props: CloseButtonProps) {
    const { onClick } = props;

    return (
        <StyledButton onClick={onClick}>
            <img src={iconCross} alt="close" />
        </StyledButton>
    );
}
