//Imports
import React from "react";
import {
    StyledModalHeaderSeparator,
    StyledSimpleSeparatorUpward,
    StyledSimpleSeparatorDownward,
} from "./style";

//Types
export enum AREA_SEPARATOR_TYPES {
    modalHeader,
    simpleUp,
    simpleDown,
}

type AreaSeparatorProps = {
    type: number;
};

//Component of an area separator
export default function AreaSeparator({ type }: AreaSeparatorProps) {
    switch (type) {
        case AREA_SEPARATOR_TYPES.modalHeader:
            return <StyledModalHeaderSeparator />;
        case AREA_SEPARATOR_TYPES.simpleUp:
            return <StyledSimpleSeparatorUpward />;
        case AREA_SEPARATOR_TYPES.simpleDown:
            return <StyledSimpleSeparatorDownward />;
    }

    return null;
}
