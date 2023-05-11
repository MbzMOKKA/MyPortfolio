//Imports
import React from 'react';
import { Link } from 'react-router-dom';

//Types
type WorkCardProps = {
    id: number;
};

//Component of a work card
export default function WorkCard(props: WorkCardProps) {
    const { id } = props;

    return <Link to={`/work/${id}`}>work card {id}</Link>;
}
