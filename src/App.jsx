import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";
import About from "./pages/About";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
