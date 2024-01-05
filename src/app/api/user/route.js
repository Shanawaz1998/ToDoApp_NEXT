import { User } from "@/models/user";
import { NextResponse } from "next/server";

//To Get all the users
export const GET = async (request) => {
  try {
    const allUsers = await User.find().select("-password"); //select method here is used to hide the particular field in the arg with the minus sign
    return NextResponse.json(allUsers);
  } catch (err) {
    console.log("Error", err);
    return NextResponse.json({
      message: "Failed to get the users",
      status: false,
    });
  }
};

//Create USer
export const POST = async (request) => {
  const { name, email, password, about, profileURL } = await request.json();
  console.log({ name, email, password, about, profileURL });

  const user = new User({ name, email, password, about, profileURL });
  try {
    const userCreated = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log("Error form route.js", error);
    return NextResponse.json({
      message: "Failed to create user!!--",
      status: false,
    });
  }
};
