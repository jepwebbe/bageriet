import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// From from React Hook Form builder
const ContactForm = () => {
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  navigate("/takbesked")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Navn"
        {...register("name", { required: true, maxLength: 80 })}
      />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea placeholder="Besked" {...register("message", {required: true})} rows="15" maxLength="500"/>

      <input className="submit" type="submit" value="Send"/>
    </form>
  );
};
export default ContactForm;
