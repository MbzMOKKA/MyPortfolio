//Imports
import React from "react";
import { StyledCard } from "./style";

//Types
type WorkCardProps = {
    id: number;
};

//Component of a work card
export default function WorkCard(props: WorkCardProps) {
    const { id } = props;

    return <StyledCard to={`/work/${id}`}>work card {id}</StyledCard>;
}
