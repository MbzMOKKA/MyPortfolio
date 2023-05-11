//Imports
import React from 'react';
import { StyledMain, StyledTest } from './style';
import WorkCard from '../../components/works/WorkCard';
import { useParams } from 'react-router-dom';

//Component of a works's page
export default function Works() {
    const { id } = useParams();

    return (
        <StyledMain>
            <p>WORKS PAGE</p>
            <WorkCard id={0} />
            <WorkCard id={1} />
            <WorkCard id={2} />
            <StyledTest>COUCOU</StyledTest>
        </StyledMain>
    );
}
