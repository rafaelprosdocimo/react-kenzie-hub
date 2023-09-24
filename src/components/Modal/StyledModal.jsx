import styled from "styled-components";

export const StyledModal = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    .div-wrapper{
        width: 50%;
        height: 50%;
        margin: 25% auto;
        background-color: #212529;
        display: flex;
        flex-direction: column;
    }
    .div-header{
        background-color: #343B41;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }
    .Close-Modal{
        background:none;
        border: none;
        color: #F8F9FA;

    }
    .div-main{
        padding: 20px 20px;
        
    }
    .form-modal{
        display: flex;
        flex-direction: column;
        gap: 50px;
        justify-content: space-between;
    }
    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        line-height: 0px;

        color: #F8F9FA;
    }
    input{
        width: 100%;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        
        color: #F8F9FA;

        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 13.0293px;
        gap: 8.14px;
        height: 45.5px;
        border: none;

        background: #343B41;

        border-radius: 3.20867px;
    }
input:focus{
    border: 0.9772px solid #F8F9FA;


}


.button-submit{
    background: #FF577F;
    border: 1.2182px solid #FF577F;
    border-radius: 4.06066px;
    height: 45.5px;
    color: #F8F9FA;

}
select{
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13.0293px;
line-height: 21px;

height: 45.5px;    
border: 0.9772px solid #F8F9FA;
border-radius: 3.20867px;   
background: #343B41;
color: #868E96;
}
.errormsg{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 9.772px;
line-height: 0px;
margin-top: -10px;
color: red;
}
p{
    margin-bottom: -20px;
}
`;
