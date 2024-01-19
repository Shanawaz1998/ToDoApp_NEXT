"use client";

import UserContext from "@/context/userContext";
import { deleteTask, getTaskOfUser } from "@/services/todoSevices";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";

function ShowTask() {
  const [tasks, settasks] = useState([]);
  const context = useContext(UserContext);
  console.log("User context ", context);

  useEffect(() => {
    context.user && loadTasks(context.user._id);
    console.log("id", context.user?._id);
  }, [context.user]);

  async function loadTasks(userId) {
    try {
      console.log("User Id", userId);
      const result = await getTaskOfUser(userId);
      console.log("Result from show Task", result);
      settasks([...result].reverse());
    } catch (error) {
      console.log("Error", error);
    }
  }

  const handleDeleteTaskParent = async (taskId) => {
    try {
      await deleteTask(taskId);
      // console.log("Delete result", result);
      const newTask = tasks.filter((item) => {
        return item._id !== taskId;
      });
      console.log("New Task", newTask);
      settasks(newTask);
      toast.success("Task Deleted", {
        position: "top-center",
      });
    } catch (error) {
      console.log("Error", error);
      toast.error("Error in deleting the task");
    }
  };

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3 ">Your tasks ( {tasks.length} )</h1>

        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            handleDeleteTaskParent={handleDeleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowTask;
