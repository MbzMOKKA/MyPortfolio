//Imports
import styled from "styled-components";
import { colors } from "../../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8px;
    margin-bottom: 48px;
    p {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 6px;
    }
    ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        list-style: none;
        li {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            color: ${colors.support.typeSkill};
            border: 1px ${colors.support.typeSkill} solid;
            border-radius: 5px;
            padding: 4px 5px;
            font-size: 16px;
            margin-right: 8px;
            img {
                width: auto;
                height: 15px;
                margin-right: 4px;
            }
        }
    }
`;
