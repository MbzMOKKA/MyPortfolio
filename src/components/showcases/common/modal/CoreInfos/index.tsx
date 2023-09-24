//Imports
import React from "react";
import { StyledCoreInfos } from "./style";

//Types
type CoreInfosProps = {
    children: React.ReactNode;
};

//Component of the core infos container of a showcase
export default function CoreInfos({ children }: CoreInfosProps) {
    return <StyledCoreInfos>{children}</StyledCoreInfos>;
}
