import styled from "styled-components";
import React from "react";
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    max-width: 60%;
    margin: 0 auto;
    height: 120px;
    align-items: center;
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        /* identical to box height, or 156% */


        /* grey-0 */

        color: #F8F9FA;
    }
    .p-header{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        /* identical to box height, or 183% */
        color: #868E96;
    }
    @media (max-width: 768px) {
        width: 95%;
    }
    `;