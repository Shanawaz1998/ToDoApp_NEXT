"use client";

import Image from "next/image";
import React, { useState } from "react";
import loginSvg from "../assets/login.svg";
import { addTask } from "@/services/todoSevices";

// export const metadata = {
//   title: "Add Task : Work Manager",
// };
function page() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    userId: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    try {
      const result = addTask(task);
      console.log("Result", result);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className=" col-span-6 col-start-4 bg-white">
        <h1 className="text-center mt-4 text-2xl font-bold">
          Add your task here !!!
        </h1>
        <div className="flex justify-center mt-5">
          <Image
            src={loginSvg}
            style={{
              width: "300px",
            }}
            alt="login-img"
          />
        </div>
        <form action="#!" onSubmit={handleOnSubmit} method="POST">
          {/* task title  */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="task_title"
              value={task.title}
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
            />
          </div>
          {/* task CONENT  */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              value={task.content}
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-3xl focus:ring-gray-400-100 border border-gray-800"
              name="task_status"
              value={task.status}
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* button  actions */}
          <div className="mt-4 flex justify-center mb-5">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Task{" "}
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>

          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
}

export default page;
