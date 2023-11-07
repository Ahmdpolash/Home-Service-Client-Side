import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { authContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, profile } = useContext(authContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const toastId = toast.loading("logging In");

    const form = e.target;
    const name = form.name.value;
    const photo = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    const formData = { name, photo, email, password };
    console.log(formData);

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long", {
        id: toastId,
      });
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one Capital letter.", {
        id: toastId,
      });
    } else if (!/[!@#$%^&*:;?,.]/.test(password)) {
      return toast.error(
        "Password must contain at least one special character",
        { id: toastId }
      );
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        profile(name, photo);

        toast.success("logged In", { id: toastId });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message, { id: toastId });
      });

    // e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeClean | Register</title>

      </Helmet>
      <div className="h-[90vh] mb-4 mt-2 flex items-center justify-center ">
        <form
          onSubmit={handleRegister}
          className="bg-[#ECF0F2] relative p-6 w-[85vw]  lg:w-[460px] rounded-lg"
        >
          <h3 className="mb-3 font-semibold text-xl lg:text-2xl text-[#051145]">
            Create A New Account
          </h3>
          <label className="label">
            <span className="label-text text-[16px]">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full input p-3 my-2 input-bordered"
            name="name"
            required
          />
          <label className="label">
            <span className="label-text text-[16px]">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="w-full input p-3 my-2 input-bordered"
            name="image"
            required
          />
          <label className="label">
            <span className="label-text text-[16px]">Email</span>
          </label>
          <input
            type="email"
            placeholder="Username or Email Address"
            className="w-full p-3 my-2 input input-bordered"
            name="email"
            required
          />
          <label className="label">
            <span className="label-text text-[16px]">Password</span>
          </label>
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="w-full p-3 my-2 input input-bordered"
            required
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-9 mt-6"
          >
            {show ? (
              <AiOutlineEye className="text-xl"></AiOutlineEye>
            ) : (
              <AiOutlineEyeInvisible className="text-xl"></AiOutlineEyeInvisible>
            )}
          </span>
          <p className="text-[#1b7261] font-bold text-[13px] hover:underline cursor-pointer py-2 ml-2">
            Forgot Password ?
          </p>

          <button
            type="submit"
            className="bg-[#1ECB15] text-[17px] hover:bg-transparent hover:text-[#1ECB15] duration-300 border-2 border-[#1ECB15] py-3 mt-2 rounded-md w-full text-white font-semibold "
          >
            Register Now
          </button>

          <Link>
            <span className="flex font-semibold  text-[#54595f] justify-center py-3 ">
              Have an Account ?{" "}
              <Link
                className="font-bold text-[#1ECB15] hover:underline"
                to="/login"
              >
                Login
              </Link>
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
