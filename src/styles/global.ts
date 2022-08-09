import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        background-color: ${({theme}) => theme.colors.background};
    }

    button {                   
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }    

    input {
        border: inherit;
    }

    h1 {
        color: ${({theme}) => theme.colors.primary};
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 64px;
    }
`;

export default GlobalStyles;