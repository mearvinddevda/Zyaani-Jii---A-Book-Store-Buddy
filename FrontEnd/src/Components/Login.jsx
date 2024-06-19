import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-white dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">LogIn</h3>
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
                {errors.email && <span className="text-sm text-red-600">This field is required</span>}

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
                {errors.password && <span className="text-sm text-red-600">This field is required</span>}

            </div>
            {/* Button */}
            <div className="my-4 flex justify-around">
              <button className="btn btn-secondary text-white">LogIn</button>
              <p className="m-auto">
                Not Registered{" "}
                <Link
                  to="/signup"
                  className="text-sky-400 underline cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
