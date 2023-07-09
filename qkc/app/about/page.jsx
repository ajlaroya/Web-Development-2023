import Footer from "@/components/Footer";

export const metadata = {
  title: "About | QKC Studios®",
  description: "minimal, modern, and affordable clothing brand for introverts",
};

export default function About() {
  return (
    <main
      id="page"
      className="min-w-full flex-col overflow-x-hidden px-[19px] pb-[19px] pt-[64px] transition duration-300 ease-in-out md:px-[26px] md:pt-[80px]"
    >
      <section className="border-t py-6">
        <div className="flex flex-wrap">
          <h1 className="w-full pb-2 md:pb-0 md:w-1/3 pr-[2em] font-semibold">About</h1>
          <div className="w-full md:w-2/3 space-y-4">
          <span className="text-[80px] sm:text-[150px] font-bold tracking-tighter leading-tight text-center">QKC Studios®</span>
            <p className="text-xl text-justify leading-7 sm:leading-9 sm:pb-[200px]">
               <span className="italic">also known as: Quiet Kids Club Studios®</span> is an apparel line that celebrates the unique qualities of introverts. The brand offers a range of minimal and cozy clothing for both men and women, including t-shirts, hoodies, sweaters, and accessories. All of the designs are inspired by introversion and feature bold graphics that celebrate the power of being an introvert. The brand also offers a blog with articles about introversion, tips for living as an introvert, and advice on how to make the most out of being an introvert. QKC Studios is committed to creating a community where introverts can feel empowered and accepted.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
