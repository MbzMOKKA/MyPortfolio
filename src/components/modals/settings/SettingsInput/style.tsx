//Imports
import styled from 'styled-components';

//Local styles
export const StyledSetting = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
`;

export const StyledName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
    label {
        margin-left: 8px;
        margin-right: 16px;
        font-size: 20px;
    }
    div {
        flex: 1;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.25);
    }
`;
