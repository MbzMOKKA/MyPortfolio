//Imports
import React from "react";
import { StyledModalHeaderSeparator, StyledPageTitleSeparator } from "./style";

//Types
export enum AREA_SEPARATOR_TYPES {
    modalHeader,
    pageHeader,
}

type AreaSeparatorProps = {
    type: number;
};

//Component of an area separator
export default function AreaSeparator(props: AreaSeparatorProps) {
    const { type } = props;

    switch (type) {
        case AREA_SEPARATOR_TYPES.modalHeader:
            return <StyledModalHeaderSeparator />;
        case AREA_SEPARATOR_TYPES.pageHeader:
            return <StyledPageTitleSeparator />;
    }

    return null;
}
