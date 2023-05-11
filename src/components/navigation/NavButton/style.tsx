//Imports
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorNavButtonSelected } from '../../../utils/style/colors';

//Types
type StyledNavButtonProps = {
    index: number;
    selected: boolean;
};

//Local styles
const borderColor = 'black';

export const StyledNavButton = styled(Link)<StyledNavButtonProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0px;
    border-right: 1px solid ${borderColor};
    ${({ index }) => (index === 0 ? `border-left: 1px solid ${borderColor};` : null)};
    ${({ selected }) => (selected ? `background-color:${colorNavButtonSelected}` : null)};
    text-decoration: none;
    img {
        height: 42px;
    }
    p {
        padding: 6px 0px;
        font-size: 18px;
    }
`;
