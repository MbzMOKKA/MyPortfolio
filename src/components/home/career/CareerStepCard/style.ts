//Imports
import styled from "styled-components";
import {
    borders,
    colors,
    breakpoints,
    paddings,
} from "../../../../utils/style";

//Local styles
export const StyledContainer = styled.li`
    margin-top: 42px;
    margin-bottom: 42px;
    display: flex;
    justify-content: space-between;
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        margin-top: 72px;
        margin-bottom: 72px;
    }
`;

export const StyledBubble = styled.div`
    flex: 1;
    header {
        background-color: ${colors.neutral.semiOpaqueBlack};
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        padding-left: 10px;
        p {
            margin-left: 12px;
            margin-right: 12px;
            font-style: italic;
            font-size: 14px;
        }
        h2 {
            text-align: right;
            padding-right: ${paddings.mobile.mainHorizontal};
            padding: 12px;
        }
    }
    main {
        p {
            text-align: right;
            padding-left: 36px;
            padding-right: ${paddings.mobile.mainHorizontal};
        }
    }
    @media (min-width: ${breakpoints.tabletMinWidth}) {
        header {
            margin-bottom: 18px;
            padding-left: 14px;
            border-top-right-radius: ${borders.radius.round};
            border-bottom-right-radius: ${borders.radius.round};
            p {
                font-size: 15px;
            }
            h2 {
                padding: 15px;
            }
        }
        main {
            p {
                padding-left: 64px;
            }
        }
    }
    @media (min-width: ${breakpoints.laptopMinWidth}) {
        header {
            margin-bottom: 24px;
            padding-left: 16px;
            p {
                font-size: 16px;
            }
            h2 {
                padding: 18px;
            }
        }
        main {
            p {
                padding-left: 128px;
            }
        }
    }
`;
