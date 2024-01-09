import { getResponseMessage } from "@/helper/reponseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//To get the single task from the DB
export const GET = async (request, { params }) => {
  const todoId = params.todoId;
  try {
    const todoData = await Task.findById(todoId);
    return NextResponse.json(todoData);
  } catch (error) {
    return getResponseMessage("Failed to get the single task", 404, false);
  }
};

//TO Delete the Task
export const DELETE = async (request, { params }) => {
  const todoId = params.todoId;
  try {
    const todoData = await Task.findByIdAndDelete(todoId);
    return getResponseMessage("Deleted the task", 200, true);
  } catch (error) {
    console.log("Error", error);
    return getResponseMessage("Failed to get the single task", 404, false);
  }
};

//To update the task
export const PUT = async (request, { params }) => {
  const todoId = params.todoId;
  try {
    const { title, content, status } = await request.json();
    const todoData = await Task.findById(todoId);
    (todoData.title = title),
      (todoData.content = content),
      (todoData.status = status);
    const updatedData = await todoData.save();
    return NextResponse.json(updatedData);
  } catch (error) {
    console.log("Error", error);
    return getResponseMessage("Failed to get the single task", 404, false);
  }
};
