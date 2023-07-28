

import AccordionItem from "@/components/AccordionItem";
import Footer from "@/components/Footer";
import { FAQ } from "@/constants/faq";
import Image from "next/image";

export const metadata = {
  title: "FAQ | QKC Studios®",
  description: "minimal, modern, and affordable clothing brand for introverts",
};

export default function Help() {
  return (
    <main
      id="page"
      className="min-w-full flex-col overflow-x-hidden px-[19px] pb-[19px] pt-[64px] transition duration-300 ease-in-out md:px-[26px] md:pt-[80px]"
    >
      <section className="border-b border-t py-6">
        <div className="flex flex-wrap">
          <h1 className="w-full md:w-1/3 pb-2">FAQ</h1>
          <div className="w-full md:w-2/3 space-y-5">
            <p>
              If you have any specific requests or if you encounter any issues
              with your mockup files, please drop us an email at <a href="qkcstudios@gmail.com">qkcstudios@gmail.com</a>. We're happy
            to help.
            </p>
            
            <p>You can also find us on social media:</p>
            <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/qkcstudios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>

            <a href="https://www.instagram.com/qkcstudios/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>

            <a href="https://twitter.com/qkcstudios" target="_blank" rel="noopener noreferrer">
              <Image
                src="/twitter.svg"
                alt="twitter"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>

            <a href="https://open.spotify.com/playlist/6EdWkciJ9At70lkbT3ugEo?si=ddd28a4134224812" target="_blank" rel="noopener noreferrer">
              <Image
                src="/spotify.svg"
                alt="spotify"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>
            <a href="https://www.linkedin.com/company/qkc-studios" target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={50}
                height={50}
                className="h-auto max-h-[2rem] w-auto max-w-[2rem] hover:animate-pulse"
              />
            </a>
            </div>
            <p>
              Alternatively, take a look at some common questions for quick
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion */}
      {
        FAQ.map((item) => (
          <AccordionItem question={item.question} answer={item.answer} index={item.id} key={item.id} />
        ))
      }
      

      <Footer />
    </main>
  );
}
