import UserContext from "@/context/userContext";
import { deleteTask } from "@/services/todoSevices";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

function Task({ task, handleDeleteTaskParent }) {
  const { user } = useContext(UserContext);

  const handleDeleteTask = () => {
    handleDeleteTaskParent(task._id);
  };

  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        task.status == "completed" ? "bg-green-500" : "bg-gray-500"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <RxCross1 className="cursor-pointer" onClick={handleDeleteTask} />
        </div>
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status:{" "}
            <span className="font-bold">{task.status.toUpperCase()}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task;
