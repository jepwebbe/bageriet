import React from "react";
import { StyledFooter } from "./Styled.Footer";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <h3>bageriet</h3>
      <p>
        Der er mange tilgængelige lorepm ipsum, men de fleste uydgaver har
        gennemgået forandringer
      </p>
      <div>
        <p>Copyright ©2017 Bageriet APS</p>
      </div>
      <button><a href="/#"><FaChevronUp /></a></button>
    </StyledFooter>
  );
};

export default Footer;
