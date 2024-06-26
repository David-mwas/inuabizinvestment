import React, { useEffect, useState } from "react";
import { CiLock, CiLogin, CiMail } from "react-icons/ci";
import Logo from "../public/logo.png";
import useAuthToken from "../hooks/useAuth";
const apiKey = import.meta.env.VITE_API_URL;
import toast, { Toaster } from "react-hot-toast";
function Login() {
  const { getItem } = useAuthToken();
  const { token } = getItem();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  if (token) {
    window.location.replace("/");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const notification = toast.loading("Authenticating...");
    if (!email || !password) {
      console.log("email and password are required");
      toast.error("email and password are required", { id: notification });
      return;
    }
    try {
      const response = await fetch(`${apiKey}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.status == 200) {
        toast.success("logged in successfully", { id: notification });
        console.log("logged in successfully");
        const data = await response.json();
        localStorage.setItem("inuabizAuth", data.access_token);
        window.location.href = `/`;
      } else {
        console.log("error", response);
        toast.error(
          `${response.statusText}, Failed to login with provided credentials`,
          { id: notification }
        );
        return;
      }
    } catch (error) {
      toast.error(error, { id: notification });
      console.error(error);
    }
  };
  return (
    <>
      <Toaster />
      <div className="w-screen h-screen flex justify-center items-center p-6 bg-[aliceblue]">
        <form className="bg-[rgba(0,0,123,.1)] w-full flex flex-col items-center justify-center shadow-2xl rounded-xl  md:w-[450px] shadow-black gap-4 py-4 pb-8 border-slate-500 border-2">
          <div className="w-full text-center flex flex-col justify-center items-center py-4">
            <img src={Logo} alt="" className="w-[100px] h-[100px]" />
            <h2 className="text-xl font-bold text-slate-500">
              Login To InuaBiz
            </h2>
          </div>
          <div className="flex-col flex gap-6 w-full justify-center items-center">
            <div className="flex items-center border-2 border-gray-500 rounded-lg w-[90%] outline-none bg-white px-2">
              <CiMail className="w-6 h-6 text-slate-800 font-bold" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email@gmail.com"
                required
                className="flex-1 px-2 py-2 rounded-lg border-none outline-none"
              />
            </div>
            <div className="flex items-center border-2 border-gray-500 rounded-lg w-[90%] outline-none bg-white px-2">
              <CiLock className="w-6 h-6 text-slate-800 font-bold" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                required
                className="flex-1 px-2 py-2 rounded-lg border-none outline-none"
              />
            </div>

            <p className="text-blue-500 text-right w-full pr-4">
              forgot password?{" "}
            </p>
            <p className="text-slate-500">
              Dont't have an account?{" "}
              <a href="/signup">
                <span className="font-bold text-blue-500">SignUp</span>
              </a>
            </p>
            <div
              onClick={handleLogin}
              className="flex items-start justify-start bg-blue-500 px-12 py-2 rounded-2xl shadow shadow-black cursor-pointer"
            >
              <button className="text-white font-semibold gap-2 flex hover:gap-4">
                <span className="text-xl">
                  <CiLogin />
                </span>
                <span> Login</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
