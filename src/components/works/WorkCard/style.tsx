//Imports
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getWorkTypeColor } from "../../../utils/misc";
import { Work } from "../../../data/content/works";

//Types
type StyledThumbnailProps = {
    work: Work;
};

//Local styles
export const StyledCard = styled(Link)`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const StyledThumbnail = styled.div<StyledThumbnailProps>`
    //4:3 format
    width: 40vw;
    height: 30vw;
    overflow: hidden;
    border: 1px ${({ work }) => getWorkTypeColor(work.type)} solid;
    margin-right: 6px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StyledSummary = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 4px;
    }
`;

export const StyledDate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
        font-size: 14px;
    }
`;
