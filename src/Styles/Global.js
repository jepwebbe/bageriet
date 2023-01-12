import { createGlobalStyle } from "styled-components";
import Lobster from '../Assets/fonts/Lobster_1.4.otf'
import OpenSans from '../Assets/fonts/OpenSans/OpenSans-Regular.ttf'
export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Lobster";
    src: local("Lobster"),
    url(${Lobster}) format('opentype');
    font-weight: 300;
    font-style: normal
}
@font-face {
    font-family: "OpenSans";
    src: local("OpenSans"),
    url(${OpenSans}) format('truetype');
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
    font-family: "OpenSans";
}
main {
    background-color: #FAFAFA;
}
h1 {
    font-family: "Lobster";
    font-size: 3rem;
}
h2 {
    font-family: "Lobster";
    font-size: 2rem;
    margin-top: 0;
    padding-top: 2rem;
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