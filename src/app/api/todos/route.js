//  title: ,
//  content: ,
//   addedDate:,
//   status: ,
//   userId: ,

import { NextResponse } from "next/server";
import { Task } from "@/models/task";

//To get all the tasks
export const GET = async (request) => {
  const allTasks = await Task.find();
  try {
    return NextResponse.json(allTasks);
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "Failed to get all the tasks",
    });
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
