import UserContext from "@/context/userContext";
import { deleteTask } from "@/services/todoSevices";
import { data } from "autoprefixer";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";

function Task({ task, handleDeleteTaskParent }) {
  const { user } = useContext(UserContext);

  const date = new Date();
  console.log("Date", date.toLocaleTimeString());

  const handleDeleteTask = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteTaskParent(task._id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
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
            Status:
            <span className="font-bold">{task.status.toUpperCase()}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
        <p className="text-left">
          Added on : {date.toLocaleDateString()} at
          {"  " + date.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

export default Task;
