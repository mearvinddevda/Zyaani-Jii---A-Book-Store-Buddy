import React , { useEffect, useState }from "react";
import axios from "axios"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../../public/list.json";
import Card from "./Card";
function FreeCourse() {
  const [book , setBook]=useState([]);
  useEffect(()=>{
    const getBook =async()=>{
      try {
        const res = await axios.get("http://localhost:4000/book");
        const data =(res.data).filter((data) => data.category === "free");
        // console.log(data);
        setBook(data);
      } catch (error) {
        console.log("Error : ", error);
      }
    }
    getBook();
  },[])

  // const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4   ">
        <div className="">
          <h1 className="font-bold text-xl pb-2">Free Offered Course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad
            illum eum sit. Incidunt magni officiis repellendus vel fugit unde
            odit eos sint optio nulla laboriosam esse tempora, aut eligendi,
            alias similique necessitatibus ullam qui deserunt voluptate,
            aspernatur autem deleniti! At sunt, cupiditate ea quam commodi
            debitis omnis ut quod natus quis, nemo magni odit numquam?
          </p>
        </div>

        <div className="my-12">
          <Slider {...settings}>
            {book.map((items)=>(
                <Card item= {items} key={items.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeCourse;
