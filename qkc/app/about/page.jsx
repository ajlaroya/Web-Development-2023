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
          <h1 className="w-full pb-2 pr-[2em] font-semibold md:w-1/3 md:pb-0">
            About
          </h1>
          <div className="w-full space-y-4 md:w-2/3 sm:pb-[200px]">
            <span className="text-center text-[70px] font-bold leading-tight tracking-tighter sm:text-[110px] md:text-[120px]">
              QKC Studios®
            </span>
            <p className="text-xl leading-7 sm:leading-9">
              Welcome to QKC Studios®,{" "}
              <span className="italic">also known as - Quiet Kids Club®</span>,
              where we celebrate introverts and their unique qualities. Our
              mission is to empower and support introverts, creating a space
              where they can feel accepted and valued for who they are. We
              believe that introverts have strengths and talents that are often
              overlooked, and we're here to change that. <br /> <br />
              What sets us apart is our commitment to celebrating introverts in
              a bold, creative way. Our apparel line features designs that
              highlight the unique qualities of introverts, from their love of
              solitude to their deep thinking and creativity. We use minimal
              colors, bold graphics, cozy materials to create a look that's both
              eye-catching and empowering. Whether you're an introvert yourself
              or just appreciate what they bring to the world, there's something
              for everyone in our collection.
              <br/><br/>
              <span className="font-bold">Arthur Laroya</span><br/>
              Director of QKC Studios®
            </p>
            <img className="w-auto h-20 justify-start" src="/signature.png" alt="sig" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
