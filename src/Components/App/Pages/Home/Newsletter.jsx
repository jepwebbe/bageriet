import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { StyledNewsletter } from "./Styled.Newsletter";

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <div>
        <h2>Tilmeld dig vores nyhedsbrev</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <form>
        <FaEnvelope />
        <input type="text" />
        <button>Tilmeld</button>
      </form>
    </StyledNewsletter>
  );
};

export default Newsletter;
