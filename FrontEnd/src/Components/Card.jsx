import React from "react";

function Card({item}) {
    // console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card w-92 bg-base-100 shadow-xl mx-10 hover:scale-105 duration-300 dark:bg-white dark:text-black">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between ">
              <div className="btn btn-neutral my-auto">${item.price}</div>
              <div className="btn btn-active btn-primary hover:bg-sky-400 ">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
