//Imports
import styled from 'styled-components';
import { navBarHeight } from '../../utils/globalConstants';
import colors from '../../utils/style/colors';

//Local styles
export const StyledAppContainer = styled.div`
    position: relative;
    padding-bottom: ${navBarHeight}px;
    background-color: ${colors.neutral.bodyBgColor};
`;
