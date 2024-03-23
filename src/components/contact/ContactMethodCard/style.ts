//Imports
import styled from "styled-components";
import { borders, breakpoints, colors } from "../../../utils/style";

//Local styles
export const StyledMethod = styled.div`
    background-color: ${colors.neutral.card};
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    margin-bottom: 12px;
    overflow: hidden;
    border-radius: ${borders.radius.normal};
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        margin-bottom: 24px;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    padding-left: 12px;
    img {
        width: 42px;
        height: 42px;
    }
    h2 {
        margin-left: 16px;
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        padding: 24px;
        img {
            width: 48px;
            height: 48px;
        }
        h2 {
            margin-left: 24px;
        }
    }
`;

export const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
    padding: 8px;
    a {
        width: 38px;
        height: 38px;
        margin-left: 8px;
        img {
            width: 26px;
        }
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        padding: 12px;
        a {
            width: auto;
            height: auto;
            margin-left: 24px;
            img {
                margin-left: 8px;
            }
        }
    }
`;

export const StyledInfo = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${borders.radius.round};
    p {
        color: white;
        text-align: center;
        font-style: italic;
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        p {
            font-size: 20px;
        }
    }
`;
