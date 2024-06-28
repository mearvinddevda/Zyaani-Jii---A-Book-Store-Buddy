import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function SingUp() {
  const navigate =useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4000/user/signup", userInfo).then(
        (res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("SignUp Successfull");
          navigate (from,{replace:true});
        }
        localStorage.setItem("User",JSON.stringify(res.data.User))
      })
      .catch((error) => {
        if (error.res) {
          toast.error("Error: " + error.res.data.message);
          console.log(error);
        }
      });
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center ">
        <div className="modal-box rounded-md dark:bg-white dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                className="w-80 px-3 py-1 border rounded-md dark:bg-white outline-none "
                placeholder="Enter Your Name"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* {Email} */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                className="w-80 px-3 py-1 border rounded-md dark:bg-white outline-none "
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                className="w-80 px-3 py-1 border rounded-md dark:bg-white outline-none "
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* Button */}
            <div className="my-4 flex justify-around">
              <button className="btn btn-secondary text-white">Sign Up</button>
              <p className="m-auto">
                Have a Account ?{" "}
                <button
                  className="text-sky-400 underline cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  LogIn
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
