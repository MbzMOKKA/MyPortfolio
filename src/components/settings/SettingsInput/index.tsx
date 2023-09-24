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
    const { renderComplexText } = useText();

    return (
        <StyledSetting>
            <StyledName>
                <label>{renderComplexText(nameId)}</label>
                <div />
            </StyledName>
            {children}
        </StyledSetting>
    );
}
