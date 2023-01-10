import { createGlobalStyle } from "styled-components";
import Lobster from '../Assets/fonts/Lobster_1.4.otf'

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Lobster";
    src: local("Lobster"),
    url(${Lobster}) format('opentype');
    font-weight: 300;
    font-style: normal
}
* {
    box-sizing: border-box;
}
html {
    font-size: 16px;
    scroll-behavior: smooth;
}
body {
    max-width: 100vw;
    margin: 0 auto;
}
h1 {
    font-family: "Lobster";
    font-size: 3rem;
}
h2 {
    font-size: 2rem;
    }
a {
    text-decoration: none;
}
li {
    list-style-type: none;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
`