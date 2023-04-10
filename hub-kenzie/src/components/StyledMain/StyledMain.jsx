import styled from "styled-components";

export const StyledMain = styled.main`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    ont-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    /* identical to box height, or 156% */


    /* grey-0 */

    color: #F8F9FA;
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    @media (max-width: 768px) {
            display: none;
    }
`