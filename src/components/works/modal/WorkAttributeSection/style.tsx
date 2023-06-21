//Imports
import styled from "styled-components";
import { Work } from "../../../../data/works/works";
import { getWorkTypeColor } from "../../../../utils/misc/getWorkTypeInfosFunctions";

//Types
type StyledWorkTypeProps = {
    work: Work;
};

export const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding-left: 8px;
    padding-right: 8px;
`;

export const StyledWorkType = styled.p<StyledWorkTypeProps>`
    color: ${({ work }) => getWorkTypeColor(work.type)};
    border: 1px ${({ work }) => getWorkTypeColor(work.type)} solid;
    border-radius: 5px;
    padding: 1px 5px;
`;
