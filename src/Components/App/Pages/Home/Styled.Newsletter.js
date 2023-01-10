import styled from 'styled-components'
import NewsletterBg from "../../../../Assets/images/newsletterbg.jpg";

export const StyledNewsletter = styled.section`
background-image: url("${NewsletterBg}");
height: 20rem;
background-size: cover;
display: grid;
align-items: center;
color: white;
padding-left: 20%;
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
    align-self: start;
    input {
        width: 25rem;
    }

}
`