import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <div className="dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Courses />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
