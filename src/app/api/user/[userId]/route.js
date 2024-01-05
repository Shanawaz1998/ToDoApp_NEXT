import { NextResponse } from "next/server";
import { User } from "@/models/user";
import { typescript } from "../../../../../next.config";

//Api to get the single user
export const GET = async (request, { params }) => {
  const userId = params.userId;
  try {
    const userById = await User.findOne({ _id: userId });
    const { name, email, password, about, profileURL } = await request.json();
    const user = new User({ name, email, password, about, profileURL });
    await user.save();
    return NextResponse.json(userById);
  } catch (error) {
    console.log("Error", error);
    NextResponse.json({
      message: "Failes to Get the required user",
      status: false,
    });
  }
};

//Api to update the user for this we need 2 things - Id and the update data
export const PUT = async (request, { params }) => {
  const userId = params.userId;
  const { name, email, password, about, profileURL } = await request.json();
  try {
    const userById = await User.findById(userId);
    (userById.name = name),
      (userById.email = email),
      (userById.password = password),
      (userById.about = about),
      (userById.profileURL = profileURL);

    console.log(userById);
    const updatedUser = await userById.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("Error", error);
    NextResponse.json({
      message: "Failed to update the data",
      status: false,
    });
  }
};

//Api to delete the user from the db
export const DELETE = async (request, { params }) => {
  try {
    const deletedData = await User.deleteOne({ _id: params.userId });

    if (deletedData.deletedCount === 0) {
      return NextResponse.json({
        message: "Please enter the valid user Id which exist in the DB",
      });
    }
    return NextResponse.json({
      message: "Deleted the User",
      status: true,
    });
  } catch (err) {
    return NextResponse.json({
      status: false,
      message: "Failed to delete the data",
    });
  }
};
