//Imports
import styled from "styled-components";
import { breakpoints } from "../../../../../utils/style";

//Local styles
export const StyledInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 6px;
    p {
        text-align: center;
        font-size: 13px;
        font-style: italic;
        strong {
            font-size: 16px;
            font-style: normal;
        }
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        padding: 4px;
        p {
            text-align: center;
            font-size: 12px;
            strong {
                font-size: 14px;
            }
        }
    }
    @media (min-width: ${breakpoints.desktopMinWidth}) {
        padding: 8px 6px;
        p {
            font-size: 13px;
            strong {
                font-size: 16px;
            }
        }
    }
`;
