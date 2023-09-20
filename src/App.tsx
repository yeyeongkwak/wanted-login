import "./App.css";
import React, { Fragment } from "react";
import { Login } from "./page/Login";
import { LoginHeader } from "./components/Header";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Container width={"100%"} height={"100%"}>
      <LoginHeader />
      <Login />
    </Container>
  );
}

export default App;
