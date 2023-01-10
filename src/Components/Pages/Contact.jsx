import React from "react";
import { StyledContact } from "./Contact.Styled";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <StyledContact>
      <h2>Kontakt os</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div>
        <ContactForm />
        <div>
          <p>
            <span>Adresse:</span> Øster Hurupvej 222
          </p>
          <p>
            <span>Telefon:</span> 12 34 56 78
          </p>
          <iframe
            width="375"
            height="350"
            src="https://www.openstreetmap.org/export/embed.html?bbox=9.952776432037355%2C57.04220071939843%2C9.975950717926027%2C57.052063456457915&amp;layer=mapnik"
          ></iframe>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
