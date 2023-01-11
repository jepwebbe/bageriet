import styled from 'styled-components'

export const StyledProductsDetails = styled.article`
max-width: 800px;
margin: 0 auto;
h2 {
    font-family: "OpenSans";
}
>div {
    display: grid;
    grid-template-columns: 5fr 2fr;
    >div {
    img {
        max-width:200px;
        height: auto;
        float: left;
        margin: 1rem;
    }
    }
    .ingredients {
        margin-left: 2rem;
        ul{
            padding-left: 0;
            li {
                background-color: white;
                margin: 0.2rem;
                line-height: 3rem;
                text-align: center;
                width: 15rem;
            }
        }
    }
   
}
`