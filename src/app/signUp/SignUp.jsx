"use client";

import React, { useState } from "react";
import Image from "next/image";
import signUpBanner from "../assets/signup.svg";
import { toast } from "react-toastify";
import { addUsers } from "@/services/usersServices";

function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "https://i.stack.imgur.com/34AD2.jpg",
  });

  const handleOnSumbit = async (event) => {
    event.preventDefault();
    if (
      data.name.trim() === "" ||
      data.email.trim() === "" ||
      data.password.trim() === "" ||
      data.about.trim() === ""
    ) {
      toast.warning("Please Enter the required Fields !", {
        position: "top-center",
      });
      return;
    }

    try {
      data.profileURL = "https://i.stack.imgur.com/34AD2.jpg";
      const result = await addUsers(data);
      console.log("Result user", result);
      toast.success("Your User has been created!!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log("Error", error);
      toast.error(
        "Please enter the valid details " + error.response.data.message
      );
    }
    //Making email unique pending

    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "https://i.stack.imgur.com/34AD2.jpg",
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 py-5">
        {/* <div className="flex justify-center m-5"> */}
        <h1 className="text-center mt-4 text-2xl font-bold">Sign Up !!!</h1>
        {/* {JSON.stringify(data)} */}
        <div className="flex justify-center mt-5">
          <Image
            src={signUpBanner}
            alt="signup banner"
            style={{
              width: "40%",
            }}
            // priority={true}
          />
          {/* </div> */}
        </div>
        <form action="#!" className="mt-5" onSubmit={handleOnSumbit}>
          {/* name */}
          <div className="mt-3">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium mb-2 ps-2"
            >
              Username
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-2xl focus:ring-gray-400-100 border border-gray-800"
              placeholder="Enter here"
              name="user_name"
              value={data.name}
              onChange={(event) => {
                setData({
                  ...data,
                  name: event.target.value,
                });
              }}
            />
          </div>
          {/* email */}
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
              value={data.email}
              onChange={(event) => {
                setData({
                  ...data,
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
              value={data.password}
              onChange={(event) => {
                setData({
                  ...data,
                  password: event.target.value,
                });
              }}
            />
          </div>
          {/* about section */}
          <div className="mt-3">
            <label
              htmlFor="user_about"
              className="block text-sm font-medium mb-2 ps-2"
            >
              About
            </label>
            <textarea
              className="w-full p-3 rounded-2xl focus:ring-gray-400-100 border border-gray-800"
              placeholder="Enter here"
              id="user_about"
              name="user_about"
              rows={8}
              value={data.about}
              onChange={(event) => {
                setData({
                  ...data,
                  about: event.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="mt-3 text-center">
            <button
              type="submit"
              className="px-3 py-2 bg-green-600  rounded hover:bg-green-400"
            >
              Signup
            </button>
            <button
              onClick={resetForm}
              type="button"
              className="px-3 py-2 bg-orange-600 ms-3 rounded hover:bg-orange-400"
            >
              Reset
            </button>
          </div>

          {/* {JSON.stringify(data)} */}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
