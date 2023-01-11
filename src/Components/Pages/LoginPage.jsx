import React from "react";
import { Page } from "../App/Layout/Page";
import Login from "../Login/Login";
import LoginCreate from "../Login/LoginCreate";
import { StyledLoginPage } from "./LoginPage.Styled.js";

const LoginPage = () => {
  return (
    <Page
      title="Login på Bageriet"
      description="Her kan du logge ind og kommentere på vores produkter"
    >
      <StyledLoginPage>
        <h2>Log ind på Bageriet</h2>
        <h3>Log ind på din brugerkonto her</h3>
        <Login />
        <p>Ønsker du at ændre noget? Slet eller ret din brugerkonto her</p>
        <h3>Opret bruger</h3> 
        <p>Har du ikke en bruger? Opret en ny brugerkonto</p>
        <LoginCreate />
      </StyledLoginPage>
    </Page>
  );
};

export default LoginPage;
