import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email, password } = await request.json();

  try {
    // Step 3 -> Generating Token
    const adminToken = jwt.sign(
      {
        email: email,
      },
      process.env.JWT_KEY
    );

    //To set the cookies
    // response.cookies.set("adminAuthToken", adminToken, {
    //   expiresIn: "1d",
    //   HttpOnly: true,
    // });
    return NextResponse.json({
      status: 201,
      message: "Admin Login",
    });
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
