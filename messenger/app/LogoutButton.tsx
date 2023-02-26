"use client";
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
