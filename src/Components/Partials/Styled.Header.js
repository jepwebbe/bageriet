import styled from "styled-components";
import headerImg from "../../Assets/images/header.png";

export const StyledHeader = styled.header`
  background-image: url("${headerImg}");
  height: 5rem;
  nav {
    height: 100%;
  } ul {
    height: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 35rem;
    margin: 0 auto;
    li {
        display: grid;
        align-content: center;
      a {
        color: white;
        font-size: 0.8rem;
      }
      h1 {
        margin: 0;
        padding: 0;
      }
    }
  }
`;
