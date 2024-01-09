import React from "react";

function CustomFooter() {
  return (
    <footer className="bg-blue-600 h-40 flex justify-around mt-auto">
      <div className="py-10 text-center">
        <h1 className="text-xl font-bold">Welcome to Work Manager</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="py-10 text-center">
        <p>Important Links</p>
        <ul>
          <li>
            <a href="#">FaceBook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">WhatsApp</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default CustomFooter;
