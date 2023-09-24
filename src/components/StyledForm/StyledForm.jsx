import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: #212529;
    width: 85%;
    padding: 30px 17px;
    
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
    border-radius: 6px;
    margin-top: 20px;

    max-width: 400px;
    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        line-height: 0px;

        color: #F8F9FA;
    }
input{
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
.button-nav{
    height: 45.5px;
    margin-bottom: 20px;
    
    background: #868E96;
    
    border: 1.2182px solid #868E96;
    border-radius: 4px;
}
.info{
        font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;

    margin: 10px auto;

    color: #868E96;
}
.title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14.439px;
    line-height: 22px;
    
    margin-bottom: 20px;
    
    color: #F8F9FA;

    flex: none;
    order: 0;
    flex-grow: 0;    
    margin: 0px auto;

}
    a{
        text-decoration: none;
        color: #fff;
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

`;