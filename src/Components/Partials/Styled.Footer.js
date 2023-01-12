import styled from 'styled-components'

export const StyledFooter = styled.footer`
background-color: #333333;
color: #898989;
position: relative;
display: grid;
place-items: center;
h3 {
    font-family: "Lobster";
    text-align: center;
    font-size: 1.8rem;
    color: white;
}
p {
    font-size: 0.7rem;
    text-align: center;
    max-width: 25rem;
    margin: 0 auto;
    align-self: center;
    padding-bottom: 1rem;
}
div {
    background-color: #252525;
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    p{
        padding-bottom: 0;
    }
}
button {
    position: absolute;
    top: -1rem;
    left: auto;
    width: 2rem;
    height: 2rem;
    border: none;
    color: #333333;
    background-color: white;
    border-radius: 50%;
    a {
        width: 2rem;
        height: 2rem;

    }
}
`