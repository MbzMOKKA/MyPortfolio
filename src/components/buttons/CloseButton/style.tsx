//Imports
import styled from 'styled-components';
import colors from '../../../utils/style/colors';

//Local styles
export const StyledButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 3px ${colors.support.negative} solid;
    border-radius: 50%;
    font-size: 36px;
    box-shadow: none;
`;
