import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

const Header = async () => {
  const session = await getServerSession();

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 aspect-square object-cover"
            height={10}
            width={50}
            src={session.user?.image!}
            alt="avatar"
          />

          <div>
            <p className="text-green-400">Logged in as:</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIAYTatDW4RXEIqw9x2hU2dP2vK0pZVQW3w&usqp=CAU"
            alt="logo"
            height={10}
            width={50}
          />
          <p className="text-green-400 font-semibold">
            Welcome to Hermes Messenger
          </p>
        </div>

        <Link
          href="/auth/signin"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
