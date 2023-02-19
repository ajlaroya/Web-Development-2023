"use client";

import React from "react";

const LogoutButton = () => {
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => console.log("Logout")}
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
