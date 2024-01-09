import Link from "next/link";
import React from "react";

function CustomNavbar() {
  return (
    <nav className="bg-blue-600 h-18 py-4 px-4 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-bold">
          <Link href="#!">Work Manager</Link>
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
          <li>
            <Link href="#!">Login</Link>
          </li>
          <li>
            <Link href="#!">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
