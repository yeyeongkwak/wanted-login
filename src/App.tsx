import "./App.css";
import React, { Fragment } from "react";
import { Login } from "./page/Login";
import { LoginHeader } from "./components/Header";
import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FutureTasks } from "./page/FutureTasks";

function App() {
  return (
    <Container width={"100%"} height={"100%"}>
      <BrowserRouter>
        <LoginHeader />
        <Routes>
          <Route path={"/"} element={<FutureTasks />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/future-tasks" element={<FutureTasks />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
