import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}
