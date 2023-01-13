import styled from 'styled-components'

export const AddCommentsStyled = styled.form`
display: grid;
width: 100%;
grid-template-columns: 5% 80% 15%;
svg{
    justify-self: center;
    background-color: white;
}
>div {
    display: flex;
    flex-direction: column;
    background-color: white;
}
input, textarea {
    border: none;
}
input[type="submit"] {
    background-color: #607684;
    color: white;
    border: none;
}
`
