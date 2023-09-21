import { LoginInputForm } from "../components/LoginInputForm";
import { LoginContainer, LoginInput } from "../styles/login";
import { useEffect } from "react";

export const Login = () => {
  useEffect(() => {
    fetch("/todos").then((res) => {
      res.json().then((r) => console.log(r));
    });
  }, []);

  return (
    <LoginContainer>
      <LoginInput style={{ margin: "auto" }}>
        <h2>Login</h2>
        <LoginInputForm />
      </LoginInput>
    </LoginContainer>
  );
};
