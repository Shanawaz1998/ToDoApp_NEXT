"use client";

import { loginUser } from "@/services/usersServices";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

function LoginPage() {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const submitForm = async (event) => {
    event.preventDefault();
    console.log("Result", loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.warning("Please enter all the required fields", {
        position: "bottom-center",
      });
    }

    try {
      const result = await loginUser(loginData);
      context.setUser(result.user);
      console.log("Result from login page", result);
      toast.success("You are Successfully LoggedIn!!!", {
        position: "top-center",
      });
      router.push("/");
    } catch (error) {
      console.log("Error from js", error);
      toast.error("Error - " + error.response.data.message, {
        position: "top-center",
      });
    }

    //Redirection pending
  };

  const resetFields = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5"></div>

        <h1 className="text-3xl text-center">Login Here </h1>

        <form action="#!" onSubmit={submitForm}>
          <div className="mt-3">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium mb-2 ps-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-2xl focus:ring-gray-400-100 border border-gray-800"
              placeholder="Enter here"
              id="user_email"
              name="user_email"
              value={loginData.email}
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
            />
          </div>
          {/* password */}
          <div className="mt-3">
            <label
              htmlFor="user_password"
              className="block text-sm font-medium mb-2 ps-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-2xl focus:ring-gray-400-100 border border-gray-800"
              placeholder="Enter here"
              id="user_password"
              value={loginData.password}
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
            />
          </div>

          <div className="mt-3 text-center">
            <button
              type="submit"
              className="px-3 py-2 bg-green-600  rounded hover:bg-green-400"
            >
              Login
            </button>
            <button
              type="button"
              className="px-3 py-2 bg-orange-600 ms-3 rounded hover:bg-orange-400"
              onClick={resetFields}
            >
              Reset
            </button>
          </div>
        </form>
        <button>Login with Google</button>
      </div>
      {/* {JSON.stringify(loginData)} */}
    </div>
  );
}

export default LoginPage;
