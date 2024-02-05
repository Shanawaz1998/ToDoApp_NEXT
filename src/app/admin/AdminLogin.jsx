"use client";
import { NextResponse } from "next/server";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

import { adminLogin } from "@/services/usersServices";

function AdminLogin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const submitForm = async (event) => {
    event.preventDefault();
    console.log("Form subited", loginData.email);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      console.log("Empty");
      toast.warning("Please enter all the required fields", {
        position: "bottom-center",
      });
    }
    if (
      loginData.email.trim() != "admin@gmail.com" ||
      loginData.password.trim() != "admin"
    ) {
      console.log("Invalid username or password");
      toast.error("Invalid Email or password", {
        position: "bottom-center",
      });
    }

    //Cookies can be only used in the server components
    if (
      loginData.email.trim() === "admin@gmail.com" &&
      loginData.password.trim() === "admin"
    ) {
      adminLogin();
      //   console.log("Logged in");
      //   cookies().set("AdminAuth", loginData.email);
      //   toast.success("Welcome Admin", {
      //     position: "bottom-center",
      //   });
    }

    // try {
    //   const result = await getAllUsers();
    //   context.setUser(result.user);
    //   console.log("Result from login page", result);
    //   toast.success("You are Successfully LoggedIn!!!", {
    //     position: "top-center",
    //   });
    //   router.push("/");
    // } catch (error) {
    //   console.log("Error from js", error);
    //   toast.error("Error - " + error.response.data.message, {
    //     position: "top-center",
    //   });
    // }
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

        <h1 className="text-3xl text-center">Admin Login Here </h1>

        <form onSubmit={submitForm}>
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
      </div>
      {/* {JSON.stringify(loginData)} */}
    </div>
  );
}

export default AdminLogin;
