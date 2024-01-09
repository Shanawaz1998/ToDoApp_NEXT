import { connectDb } from "@/helper/db";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

await connectDb();

export const GET = async (request, { params }) => {
  const userId = params.userId;
  let taskOfUser = await Task.find({ userId: userId });
  return NextResponse.json(taskOfUser);
};
