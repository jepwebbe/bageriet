import styled from "styled-components";

export const NewsStyled = styled.section`
  max-width: 800px;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 5rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    article {
      display: grid;
      grid-template-rows: 1fr 1fr 2fr;
      justify-items: center;
      align-items: start;
      img {
        border-radius: 50%;
        max-width: 100px;
      }
      a {
        color: black;
        h3 {
          text-align: center;
        }
      }
      p {
        color: #a1a1a1;
      }
    }
  }
`;
