import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import Card from "../Components/Card";
import {Link} from "react-router-dom"
import axios from "axios"
function Course() {
  const [book , setBook]=useState([]);
  useEffect(()=>{
    const getBook =async()=>{
      try {
        const res = await axios.get("http//localhost/4000/book");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="dark:bg-white dark:text-black mt-28 max-w-screen-2xl container max-auto md:px-20 px-4 ">
        <div className=" justify-center text-center ">
          <h1 className="text-2xl md:text-4xl ">
            We are Delighted to have you{" "}
            <span className="text-pink-500">Here :)</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            vitae assumenda veniam, autem magnam quod nemo unde neque temporibus
            blanditiis natus sunt sequi ratione accusamus suscipit repudiandae
            doloremque quidem deserunt beatae eos voluptates? In aut natus nam
            dolore! Nobis autem obcaecati asperiores. Fuga recusandae quod qui,
            eius voluptate omnis?
          </p>
          <Link to="/">
            <button className="btn btn-secondary text-white hover:bg-pink-500 duration-300 mt-6 ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
