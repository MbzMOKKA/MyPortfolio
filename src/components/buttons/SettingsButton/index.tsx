//Imports
import React from 'react';
import { StyledButton } from './style';
import { openSettings } from '../../../features/modalsSlice';
import { useDispatch } from 'react-redux';
import iconSettings from '../../../assets/images/icons/settings.png';

//Component of a close button
export default function CloseButton() {
    const dispatch = useDispatch();

    return (
        <StyledButton
            onClick={() => {
                dispatch(openSettings());
            }}
        >
            <img src={iconSettings} alt="close" />
        </StyledButton>
    );
}
