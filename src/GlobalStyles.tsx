import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #018762;
        --black: #1F1F1F;
        --text: #515151;
        --text-big: 4.8rem;
        --text-medium: 2.4rem;
        --transition: .5s linear;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 400 62.5% 'Nunito', sans-serif;
    }
`

export default GlobalStyles