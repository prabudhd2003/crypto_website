import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from './components/NavBar'
import SignUp from "./components/SignUp";
import { Routes, Route} from "react-router-dom";
import CoinHome from "./additional/CoinHome";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/coin" element={<CoinHome />} />
        <Route path="/earn" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
