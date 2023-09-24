//Imports
import styled from "styled-components";
import { colors } from "../../../../../utils/style";

//Local styles
export const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    padding-left: 8px;
    padding-right: 8px;
    /*> div {
        width: 100%;
        > div {
            width: 100%;
        }
    }*/
`;

export const StyledSkillType = styled.p`
    color: ${colors.support.typeHardSkill};
    border: 1px ${colors.support.typeHardSkill} solid;
    border-radius: 5px;
    padding: 4px 5px;
    font-size: 16px;
    line-height: 1;
`;
