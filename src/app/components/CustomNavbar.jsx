"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/usersServices";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

function CustomNavbar() {
  const userDataContext = useContext(UserContext);
  const router = useRouter();
  console.log("Context from navbar", userDataContext);

  const doLogout = async () => {
    try {
      const result = await logout();
      console.log("Result from navbar", result);
      userDataContext.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log("Error from navbar");
    }
  };

  return (
    <nav className="bg-blue-600 h-18 py-4 px-4 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-bold">
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/add-task">Add Task</Link>
          </li>
          <li>
            <Link href="/show-task">Show Task</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          {userDataContext?.user?.name ? (
            <>
              <>
                <li>
                  {" "}
                  <Link href="/">{userDataContext.user.name}</Link>{" "}
                </li>
                <li>
                  <button onClick={doLogout}>Logout</button>
                </li>
              </>
            </>
          ) : (
            <>
              <li>
                <Link href="/admin">Admin</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/authLogin">Auth Login</Link>
              </li>
              <li>
                <Link href="/signUp">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
