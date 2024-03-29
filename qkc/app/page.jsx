import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LoginButton from "@/components/LoginButton";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main
      id="page"
      className="min-w-full flex-col px-[19px] pb-[19px] pt-[64px] transition duration-300 ease-in-out md:px-[26px] md:pt-[80px]"
    >
      <Hero />
      <Products />
      <Footer />
    </main>
  );
}
