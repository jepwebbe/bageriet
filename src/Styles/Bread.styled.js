import styled from "styled-components";

export const BreadStyled = styled.section`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 10rem;
  h2 {
    text-align: center;
  }
  >p {
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 5rem;
    color: #a1a1a1;
  }
  >div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    article {
        display: grid;
        grid-template-rows: repeat(5, auto);
        padding-bottom: 1rem;
        img {
            max-width: 200px;
            max-height: 100px;
            justify-self: center;
        }
        >div {
           color: #a1a1a1;
           display: flex;
           justify-self: center;
           p {
            margin: 0;
           }
        }
        h3 {
            font-size: 1rem;
        }
        >p {
            place-self: start;
            color: #a1a1a1;
        }
        button {
            height: 2rem;
            border: 1px solid black;
            background-color: white;
            width: 70%;
            justify-self: center;
            a {
                color: black;
                font-family: "OpenSans";
            }
        }
    }
}
`;
