//Imports
import React from "react";
import { StyledSetting, StyledName } from "./style";
import { useText } from "../../../utils/hooks";

//Types
type SettingsInputProps = {
    nameId: string;
    children: any;
};

//Component of a settings input
export default function SettingsInput({
    nameId,
    children,
}: SettingsInputProps) {
    const { renderText } = useText();

    return (
        <StyledSetting>
            <StyledName>
                <label>{renderText(nameId)}</label>
                <div />
            </StyledName>
            {children}
        </StyledSetting>
    );
}
