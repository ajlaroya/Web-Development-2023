import Header from "../components/Header";
import Landing from "../components/Landing";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative bg-gradient-to-t from-gray-700 via-gray-900 to-black min-h-screen">
      {/* <Image 
        src='https://images.unsplash.com/photo-1533135091724-62cc5402aa20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'
        fill
        className="object-cover -z-10"
      /> */}
      <Header />
      <Landing />
    </div>
  );
}
