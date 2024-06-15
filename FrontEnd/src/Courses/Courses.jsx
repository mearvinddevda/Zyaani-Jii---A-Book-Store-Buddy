import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Course from "../Components/Course";
function Courses() {
  return (
    <div className="dark:bg-white dark:text-black">
      <Navbar></Navbar>
      <div className="min-h-screen ">
        <Course></Course>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Courses;
