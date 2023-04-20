import styled from "styled-components";

export const StyledNavBar = styled.nav`
    align-items: flex-end;
    display: flex;  
    justify-content: center;     
    height: 100px;
    width: 80%;
    margin: 0 auto;
    img{
        margin-bottom: 10px;
    }
    max-width: 400px;

    ${({ routeNav }) => {
        if (routeNav === "login") {
            return `

            `;
        } else if (routeNav === "register"){
            return `
            justify-content: space-between;
            `;
        }
        else if (routeNav === "user"){
            return `
            justify-content: space-between;
            max-width: 60%;
            bottom-boarder: 2px solid #212529;
            
            `;
        }
    }}
    .button-nav{
        height: 45.5px;
        
        background: #212529;
        
        border-radius: 4px;
        border: none;
        color: #F8F9FA;
        width: 15%;
    }
    a{
        text-decoration: none;
        color: #F8F9FA;
    }
    @media (max-width: 768px) {
        width: 95%;
    }
`;