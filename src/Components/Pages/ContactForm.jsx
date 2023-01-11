import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// From from React Hook Form builder

const ContactForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Updates the state whenever anything is written in the input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
        // [name]: type === "checkbox" ? checked : value
      };
    });
  };
  // Uses Axios to post the formdata from the state to Strapi
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    // posts to imaginative MailChimp account
      .post("http://mailchimp.us8.list-manage.com/subscribe/post", {
        data: formData,
      })
      .then((response) => {
        this.setState({});
        console.log(response.data);
      })

      .catch((error) => error);

    if (!data) return;
    navigate("/takbesked");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={formData.name}
        placeholder="Dit navn"
        maxLength="80"
        required
      />
      <input
        onChange={handleChange}
        type="email"
        name="email"
        value={formData.email}
        placeholder="Din email"
        required
        pattern="/^\S+@\S+$/i"
      />
      <textarea
        name="message"
        onChange={handleChange}
        value={formData.message}
        placeholder="Din besked"
        required
        rows="15"
        maxLength="500"
      />

      <input className="submit" type="submit" value="Send" />
    </form>
  );
};
export default ContactForm;
