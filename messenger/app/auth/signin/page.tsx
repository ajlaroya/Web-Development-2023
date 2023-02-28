import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="grid justify-center gap-7 py-10">
      <div>
        <Image
          className="object-cover"
          height={150}
          width={150}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIAYTatDW4RXEIqw9x2hU2dP2vK0pZVQW3w&usqp=CAU"
          alt="avatar"
        />
      </div>

      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
