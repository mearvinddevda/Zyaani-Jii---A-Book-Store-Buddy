import React, { useState } from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./Components/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../src/Context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          ></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
