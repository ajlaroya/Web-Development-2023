import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex-col min-w-full pb-[19px] pt-[64px] md:pt-[80px] px-[19px] md:px-[26px]">
      <Hero />
      <Products />
    </main>
  );
}
