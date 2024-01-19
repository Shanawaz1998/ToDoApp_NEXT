import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

await connectDb();

export const GET = async (request) => {
  try {
    const loginToken = request.cookies.get("authToken")?.value;
    const dataToken = jwt.verify(loginToken, process.env.JWT_KEY);
    const userdetails = await User.findById(dataToken._id);
    // console.log("User details", dataToken, userdetails);
    return NextResponse.json(userdetails);
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Failed!!!",
    });
  }
};
