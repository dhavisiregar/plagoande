import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/portofolio-page";

const App = () => {
  return (
    <main>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage />} path="/" />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </main>
  );
};

export default App;
