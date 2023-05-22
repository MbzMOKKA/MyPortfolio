//Imports
import React from 'react';
import { StyledButton } from './style';
import { openSettings } from '../../../features/modalsSlice';
import { useDispatch } from 'react-redux';

//Component of a close button
export default function CloseButton() {
    const dispatch = useDispatch();

    return (
        <StyledButton
            onClick={() => {
                dispatch(openSettings());
            }}
        >
            {'{PREFERENCES}'}
        </StyledButton>
    );
}
