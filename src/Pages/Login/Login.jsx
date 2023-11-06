import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import loginIcon from '../../assets/login.json'

const Login = () => {
  const { loginUser, googleLogin } = useContext(authContext);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const toastId = toast.loading("logging In");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("logged In", { id: toastId });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message, { id: toastId });
      });
  };
  //!google

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);
      toast.success("logged In");
      navigate("/");
    });
  };

  return (
    <div className="dark:bg-[#051145] ">
      <div className="flex flex-col lg:flex-row items-center justify-around h-screen">
      <div className="mt-52 lg:mt-0">
          <Lottie className="w-[330px] lg:w-[550px]" animationData={loginIcon}></Lottie>
        </div>
        <div className="">
          <form
            onSubmit={handleLogin}
            className="bg-[#ECF0F2]  mx-4 lg:mx-0 p-8 lg:w-[460px] rounded-lg relative"
          >
            <h3 className="mb-3 font-semibold text-center text-xl lg:text-2xl text-[#051145]">
              Log In To Your Account
            </h3>
            <label className="label">
              <span className="label-text text-[16px]">Email</span>
            </label>
            <input
              type="email"
              placeholder="Username or Email Address"
              className="w-full my-2 input input-bordered p-3"
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
              className=" w-full my-3 p-3 input input-bordered"
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

            <button className="bg-[#1ECB15] text-[17px] hover:bg-transparent hover:text-[#1D7262] duration-300 border-2 border-[#1ECB15] py-3 mt-2 rounded-md w-full text-white font-semibold ">
              Login Now
            </button>

            <span className="flex justify-center py-2 font-semibold ">Or</span>

            <button
              onClick={handleGoogleLogin}
              className="bg-black text-[17px] hover:bg-transparent hover:text-[#1ECB15] duration-300 border-2 border-[#1ECB15] py-3 mt-2 rounded-md text-white w-full font-semibold flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-xl"></FcGoogle>
              Login With<span className="font-bold">Google</span>
            </button>

            <span className="flex font-semibold mt-2 text-[#54595f] justify-center py-3 ">
              Don't have an Account ?{" "}
              <Link
                className="font-bold text-[#1ECB15] hover:underline"
                to="/register"
              >
                {" "}
                Register
              </Link>{" "}
            </span>
          </form>
        </div>

        
      </div>
    </div>
  );
};
export default Login;
