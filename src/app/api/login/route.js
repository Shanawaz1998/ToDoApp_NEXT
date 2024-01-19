import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDb } from "@/helper/db";
import jwt from "jsonwebtoken";
import { useToast } from "react-toastify";

await connectDb();

export const POST = async (request) => {
  const { email, password } = await request.json();
  try {
    // Step 1 -> To check the email already registered or not
    const user = await User.findOne({ email: email });
    if (user === null) {
      throw new Error(
        "User not found!!!, Please Register yourself if not registered already"
      );
    }

    // Step 3 -> Generating Token
    const userToken = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    // Step 2 -> To check the password correct or not
    const matched = bcrypt.compareSync(password, user.password);

    if (!matched) {
      throw new Error("Password Incorrect");
    }

    //Step 4 -> Sending tokens into the cookies

    const response = NextResponse.json({
      message: "login Success!!",
      success: true,
      user: user,
    });

    response.cookies.set("authToken", userToken, {
      expiresIn: "1d",
      HttpOnly: true,
    }); //We can see this cookie in the postman

    return response;
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      {
        message: error.message,
        status: false,
      },
      {
        status: 500,
      }
    );
  }
};
