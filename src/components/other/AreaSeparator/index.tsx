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
    className?: string;
};

//Component of an area separator
export default function AreaSeparator({ type, className }: AreaSeparatorProps) {
    switch (type) {
        case AREA_SEPARATOR_TYPES.modalHeader:
            return <StyledModalHeaderSeparator className={className} />;
        case AREA_SEPARATOR_TYPES.simpleUp:
            return <StyledSimpleSeparatorUpward className={className} />;
        case AREA_SEPARATOR_TYPES.simpleDown:
            return <StyledSimpleSeparatorDownward className={className} />;
    }
    return null;
}
