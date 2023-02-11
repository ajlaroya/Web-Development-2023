import Nav from "../components/Nav";
import Landing from "../components/Landing";
import Header from "../components/Header";
import Work from "../components/Work";

export default function Page() {
  return (
    <div className="relative bg-[#1A1A1A] min-h-screen">
      <Nav />
      <Header />
      <Landing />
      <Work />
    </div>
  );
}
