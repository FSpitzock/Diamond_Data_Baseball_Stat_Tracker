import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import Footer from "./components/Layout/Footer";
import "../src/index.css";
import '../src/App.css';


const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stats" element={<Stats />} />
        {/* 🧭 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
};

export default App;
