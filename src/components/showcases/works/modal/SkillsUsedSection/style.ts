//Imports
import styled from "styled-components";
import { breakpoints, colors } from "../../../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 15px;
    margin-bottom: 42px;
    h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
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
            color: ${colors.support.typeHardSkill};
            border-radius: 5px;
            padding: 4px 5px;
            font-size: 16px;
            margin-right: 8px;
            margin-bottom: 8px;
            img {
                width: auto;
                height: 15px;
                margin-right: 4px;
            }
        }
    }
    @media (min-width: ${breakpoints.mobileLargeMinWidth}) {
        padding: 0px 36px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        margin-right: 48px;
        padding: 0;
        margin-bottom: 0;
        h2 {
            font-size: 22px;
            margin-bottom: 12px;
        }
        ul {
            li {
                border-radius: 8px;
                padding: 6px 8px;
                font-size: 18px;
                margin-right: 10px;
                margin-bottom: 10px;
                img {
                    height: 22px;
                    margin-right: 6px;
                }
            }
        }
    }
`;
