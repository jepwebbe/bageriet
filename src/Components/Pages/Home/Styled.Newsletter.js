import styled from 'styled-components'
import NewsletterBg from "../../../Assets/images/newsletterbg.jpg";

export const StyledNewsletter = styled.section`
background-image: url("${NewsletterBg}");
height: 20rem;
background-size: cover;
color: white;
display: flex;
align-items: center;
div {
    max-width: 800px;
    margin: 0 auto;
div {
    h2 {
    font-family: "Lobster", sans-serif;
    margin-bottom: 0;
    }
    p {
        margin-top: 0;
    }
}
form {
    input {
        width: 35rem;
        border: none;
        height: 2rem;
    }
    div {
        display: inline;
        background: #BCC8D4;
        height: 2rem;
        width: 2rem;
        svg {
        }
    }
    button {
        border: none;
        color: white;
        background-color: #607684;
        width: 5rem;
        height: 2rem;
        cursor: pointer;
    }
}
}
`