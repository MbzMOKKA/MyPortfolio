//Imports
import styled from 'styled-components';
import colors from '../../../utils/style/colors';

//Common constants
const buttonSize = '40px';

//Local styles
export const StyledButton = styled.button`
    width: ${buttonSize};
    height: ${buttonSize};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.15);
    border: 3px ${colors.support.negative} solid;
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    img {
        width: 18px;
    }
    :hover {
        box-shadow: 0px 0px 8px ${colors.support.negative};
    }
`;
