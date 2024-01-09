//  title: ,
//  content: ,
//   addedDate:,
//   status: ,
//   userId: ,

import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import { getResponseMessage } from "@/helper/reponseMessage";
import { connectDb } from "@/helper/db";

await connectDb();

//To get all the tasks
export const GET = async (request) => {
  try {
    const allTasks = await Task.find();
    return NextResponse.json(allTasks);
  } catch (error) {
    console.log("Error", error);
    return getResponseMessage("Failed to get all the tasks", 404, false);
  }
};

//Add the task
export const POST = async (request) => {
  const { title, content, userId } = await request.json();
  const task = new Task({ title, content, userId });
  try {
    await task.save({ title, content, userId });
    return NextResponse.json(
      { title, content, userId },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      status: false,
      message: "Failed to create the task",
    });
  }
};
