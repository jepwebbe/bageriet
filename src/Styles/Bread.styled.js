import styled from "styled-components";
export const NewBreadStyled = styled.section`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 10rem;
  h2 {
    text-align: center;
  }
  > p {
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 5rem;
    color: #a1a1a1;
    text-align: center;
  }
`;
export const BreadStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  column-gap: 1rem;
  article {
    display: grid;
    grid-template-rows: repeat(5, auto);
    padding-bottom: 5rem;
    img {
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
      object-fit: cover;
      justify-self: center;
    }
    > div {
      color: #a1a1a1;
      display: flex;
      justify-self: center;
      p {
        margin: 0;
      }
    }
    h3 {
      font-size: 1rem;
      text-align: center;
    }
    > p {
      color: #a1a1a1;
      text-align: center;
    }
    button {
      height: 2rem;
      border: 1px solid #a1a1a1;
      background-color: white;
      width: 8rem;
      justify-self: center;
      a {
        color: #a1a1a1;
        font-family: "OpenSans";
        display: block;
      }
    }
  }
`;
