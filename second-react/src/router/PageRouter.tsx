import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { Provider } from "react-redux";

import { store } from "../store/store";

import Home from "../pages/home-page";
import Setting from "../pages/setting-page";
import Auth from "../pages/auth-page";
import Counter from "../pages/counter-page";

const PageRouters = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Auth />} path="/auth" />
            <Route element={<Setting />} path="/setting" />
            <Route element={<Counter />} path="/counter" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default PageRouters;
