import styled from "styled-components";

export const StyledContact = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 3rem;
    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: flex-end;
      input,
      textarea {
        border: none;
        line-height: 1.8;
      }
      .submit {
        background-color: #607684;
        color: white;
        width: 5rem;
        margin-left: auto;
        cursor: pointer;
      }
    }
    div p {
      span {
        font-weight: bolder;
      }
    }
    iframe {
        margin: 0;
    }
  }
`;
