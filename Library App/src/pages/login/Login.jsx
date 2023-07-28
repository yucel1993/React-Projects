import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setUser(true);
    navigate(-1);
    // if (
    //   username.toLowerCase() === "admin" &&
    //   password.toLowerCase() === "12345"
    // ) {
    //   setUser(true);
    //   navigate(-1);
    // } else {
    //   alert("Username ve Password bilgisini doğru giriniz.");
    // }
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <Header>Login Here</Header>
          <StyledInput
            type="text"
            placeholder="Username"
            // value={username}
            // onChange={e => setUserName(e.target.value)}
            required
          />
          <StyledInput
            type="password"
            placeholder="password"
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            required
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
