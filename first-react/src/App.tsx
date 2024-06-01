import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import LandingPage from "./pages/landing-page";
import AuthPage from "./pages/auth-page";
import StatePage from "./pages/state-page";
import TodoPage from "./pages/todo-page";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/auth-page/landing-page/:id" />
          <Route element={<AuthPage />} path="/auth-page" />
          <Route element={<StatePage />} path="/state-page" />
          <Route element={<TodoPage />} path="/todo-page" />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
