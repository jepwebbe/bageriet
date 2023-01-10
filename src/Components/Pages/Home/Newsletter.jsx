import React from "react";
import { useForm } from 'react-hook-form'
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StyledNewsletter } from "./Styled.Newsletter";

const Newsletter = () => {
  const {register, handleSubmit, formState: { errors} } = useForm()
  const navigate = useNavigate()
  const onSubmit = (event) => {
    event.preventDefault()
    navigate("/tak")
  }
  return (
    <StyledNewsletter>
      <div>
        <div>
          <h2>Tilmeld dig vores nyhedsbrev</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <FaEnvelope />
          </div>
          <input type="text" placeholder="Indtast din email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          <button>Tilmeld</button>
        </form>
      </div>
    </StyledNewsletter>
  );
};

export default Newsletter;
