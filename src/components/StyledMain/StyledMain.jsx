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
        width: 95%;
    }

    .header-tech{
        display: flex;
        justify-content: space-between;
        align-items: center;}
    
    .title-tech{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
    }
    .add-tech{
        width: 40px;
        height: 40px;
        background: #343B41;
        border: none;
        color: #F8F9FA;
        font-size: 24px;
        border-radius: 6px;
    }
    .list-tech{
    background: #212529;
    border-radius: 6px;
    list-style: none;
    padding: 20px;
    
    }
    .card-tech{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 10px;
        background: #121214;
        border-radius: 6px;

    }
    .h2-tech{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        margin-left: 20px;
    }
    .delete-tech{
        width: 40px;
        height: 40px;
        background: #343B41;
        border: none;
        color: #F8F9FA;
        font-size: 14px;
        border-radius: 6px;
        margin-right: 20px;
    }
    .card-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;

    }

`