"use client";

import { getAllUsers } from "@/services/usersServices";
import React, { useEffect, useState } from "react";

function AdminControls() {
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await getAllUsers();
    console.log("All users", users);
  };

  return <div>This is the admin</div>;
}

export default AdminControls;
