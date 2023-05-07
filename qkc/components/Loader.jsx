import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center transition-all duration-300">
      <div role="status">
        <Image src="/loader.svg" alt="Loading..." width={50} height={50} />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
