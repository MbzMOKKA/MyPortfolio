//Imports
import React, { useEffect } from "react";
import { StyledMain, StyledList, StyledTest } from "./style";
import { WorkCard } from "../../components/works";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    MODAL_TYPES,
    closeModals,
    openContentModal,
} from "../../redux_toolkit";

//Component of the works page
export default function WorksPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id === undefined) {
            dispatch(closeModals());
        } else {
            dispatch(
                openContentModal({ type: MODAL_TYPES.work, params: { id } })
            );
        }
    }, [dispatch, id]);

    return (
        <StyledMain>
            <StyledList>
                <WorkCard id={0} />
                <WorkCard id={1} />
                <WorkCard id={2} />
            </StyledList>
            <StyledTest>COUCOU</StyledTest>
        </StyledMain>
    );
}
