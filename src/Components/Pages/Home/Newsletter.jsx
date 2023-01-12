import axios from "axios";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StyledNewsletter } from "./Styled.Newsletter";

const Newsletter = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    b_email: "",
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
      .post("https://gmail.us18.list-manage.com/subscribe/post", {
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
    <StyledNewsletter>
      <div>
        <div>
          <h2>Tilmeld dig vores nyhedsbrev</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <FaEnvelope />
          </div>
          <input type="hidden" name="u" value="be0af08bb90be07dc785858ac" />
          <input type="hidden" name="id" value="159130355d" />
          <input
            onChange={handleChange}
            type="email"
            name="b_email"
            value={formData.b_email}
            placeholder="Din email"
            required
          />{" "}
          <button>Tilmeld</button>
        </form>
      </div>
    </StyledNewsletter>
  );
};

export default Newsletter;
