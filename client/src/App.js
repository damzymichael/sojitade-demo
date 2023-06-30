import React from "react";
import Home from "./pages/Home";
import News from "./pages/News";
import { useTheme } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
