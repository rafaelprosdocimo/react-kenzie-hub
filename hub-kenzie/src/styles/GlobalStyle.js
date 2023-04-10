import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    :root {
        font-size: 60.0%;
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-Negative : #59323F;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;

        --success: #3FE864;
        --negative: #E83F5B;

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }


   
    body,html {
        width: 100vw;
        height: 100vh;
        background:#121214;;
        margin: 0;

    body {
        overflow-x: hidden;

    }
    h1,h2,h3,h4,h5,h6,p{
        color: var(--grey-0);
    }
    h1{

    }
    h2{

    }
    h3{
    
    }
    h4{

    }
    p{

    }
    button{
        cursor: pointer;

    }
    input{
        cursor: pointer;
    }
    textarea{
        cursor: pointer;
    }
    `

    ;