import React, { useEffect, useState } from "react";
import { CiLock, CiLogin, CiMail, CiPhone } from "react-icons/ci";
import Logo from "../public/logo.png";
import { FaLock, FaMailBulk, FaMailchimp, FaPhone } from "react-icons/fa";
import useAuthToken from "../hooks/useAuth";
const apiKey = import.meta.env.VITE_API_URL;
import toast, { Toaster } from "react-hot-toast";
function SignUp() {
  const { getItem } = useAuthToken();
  const { token } = getItem();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    if (token) {
      window.location.replace("/");
    }
  }, [token]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const notification = toast.loading("signing you up ...");
    if (
      !email ||
      !password ||
      !firstName ||
      !confirmPassword ||
      !lastName ||
      !phoneNumber
    ) {
      console.error("All fields are required");
      toast.error("All fields are required", { id: notification });
      return;
    }
    if (password !== confirmPassword) {
      // setPassword("");
      // setConfirmPassword("");
      toast.error("passwords do not match", {
        id: notification,
      });
      console.log("passwords do not match");
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPassword("");
      setConfirmPassword("");
      toast.error(
        "password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long",
        { id: notification }
      );
      // setPasswordError(
      //   "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long."
      // );
      return;
    }

    try {
      const response = await fetch(`${apiKey}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          phonenumber: phoneNumber,
          password: password,
        }),
      });
      console.log(response);
      if (response.status === 200) {
        console.log("Registered successfully");
        toast.success("Registered successfully", {
          id: notification,
        });
        const { userId } = await response.json();
        // createChat(userId);
        window.location.href = "/login";
      }
    } catch (error) {
      toast.error(error, {
        id: notification,
      });
      console.error(error);
    }
  };
  console.log(phoneNumber);
  return (
    <>
      <Toaster />
      <div className="w-screen h-screen flex justify-center items-center p-4 bg-[aliceblue]">
        <form className="bg-[rgba(0,0,123,.1)] w-full flex flex-col items-center justify-center shadow-2xl rounded-3xl  md:w-[450px] shadow-black gap-4 py-4 pb-8 border-slate-500 border-2">
          <div className="w-full text-center flex flex-col justify-center items-center py-2">
            <img src={Logo} alt="" className="w-[100px] h-[100px]" />
            <h2 className="text-xl font-bold text-slate-500">
              Register To InuaBiz
            </h2>
          </div>
          <div className="flex w-[90%] gap-2 justify-center items-center">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="first name"
              required
              className="w-full px-2 py-2  border-2 border-gray-500 rounded-lg outline-none"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="last name"
              required
              className="w-full px-2 py-2 border-2 border-gray-500 rounded-lg outline-none"
            />
          </div>
          <div className="flex-col flex gap-6 w-full justify-center items-center">
            <div className="flex items-center border-2 border-gray-500 rounded-lg w-[90%] outline-none bg-white px-2">
              <FaMailBulk className="w-5 h-5 text-slate-800 font-bold" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="email@gmail.com"
                required
                className="flex-1 px-2 py-2 rounded-lg border-none outline-none"
              />
            </div>
            <div className="flex items-center border-2 border-gray-500 rounded-lg w-[90%] outline-none bg-white px-2 relative">
              <FaPhone className="w- h-5 text-slate-800 font-bold" />

              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                keyboardtype=""
                placeholder="mpesa number e.g 74xxxxxxx"
                required
                className="flex-1 px-2 py-2 rounded-lg border-none outline-none"
              />
            </div>
            <div className="flex items-center border-2 border-gray-500 rounded-lg w-[90%] outline-none bg-white px-2">
              <FaLock className="w-5 h-5 text-slate-800 font-bold" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                required
                className="flex-1 px-2 py-2 rounded-lg border-none outline-none"
              />
            </div>
            <div className="flex items-center border-2 border-gray-500 rounded-lg w-[90%] outline-none bg-white px-2">
              <FaLock className="w-5 h-5 text-slate-800 font-bold" />
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="confirm password"
                required
                className="flex-1 px-2 py-2 rounded-lg border-none outline-none"
              />
            </div>

            <p className="text-slate-500">
              Already have an account?{" "}
              <a href="/login">
                <span className="font-bold text-blue-500">Login</span>
              </a>
            </p>
            <div
              onClick={handleSubmit}
              className="flex items-start justify-start bg-blue-500 px-12 py-2 rounded-2xl shadow shadow-black cursor-pointer"
            >
              <button className="text-white font-semibold gap-2 flex hover:gap-4">
                <span className="text-xl">
                  <CiLogin />
                </span>
                <span> Register</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
