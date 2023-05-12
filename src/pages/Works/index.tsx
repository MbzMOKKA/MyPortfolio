//Imports
import React, { useEffect } from 'react';
import { StyledMain, StyledList, StyledTest } from './style';
import WorkCard from '../../components/works/WorkCard';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MODAL_TYPES, closeModals, openContentModal } from '../../features/modalsSlice';

//Component of a works's page
export default function Works() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id === undefined) {
            dispatch(closeModals());
        } else {
            dispatch(openContentModal({ type: MODAL_TYPES.work, params: { id } }));
        }
    }, [dispatch, id]);

    return (
        <StyledMain>
            <p>WORKS PAGE</p>
            <StyledList>
                <WorkCard id={0} />
                <WorkCard id={1} />
                <WorkCard id={2} />
            </StyledList>

            <StyledTest>COUCOU</StyledTest>
        </StyledMain>
    );
}
