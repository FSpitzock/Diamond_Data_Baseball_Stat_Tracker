import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import BaseballAI from "./pages/BaseballAI";
import NotFound from "./pages/NotFound";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import '../src/App.css';


const App: React.FC = () => {
  return (
    <>
    <BrowserRouter basename="/Diamond_Data_Baseball_Stat_Tracker/">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/BaseballAI" element={<BaseballAI />} />
        {/* 🧭 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
};

export default App;
