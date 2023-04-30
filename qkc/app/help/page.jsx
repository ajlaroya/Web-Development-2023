'use client'

import AccordionItem from "@/components/AccordionItem";
import Footer from "@/components/Footer";
import { FAQ } from "@/constants/faq";

export default function Help() {
  return (
    <main
      id="page"
      className="min-w-full flex-col overflow-x-hidden px-[19px] pb-[19px] pt-[64px] transition duration-300 ease-in-out md:px-[26px] md:pt-[80px]"
    >
      <section className="border-b border-t py-6">
        <div className="flex flex-wrap text-xl font-semibold">
          <h1 className="w-full md:w-1/3 pb-2">Help</h1>
          <div className="w-full md:w-2/3 space-y-5">
            <p>
              If you have any specific requests or if you encounter any issues
              with your mockup files, please drop us an email at <a href="mailto:mail@qkc.studios">mail@qkc.studios</a>. We're happy
            to help.
            </p>
            
            <p>You can also find us on social media:</p>
            <div className="space-x-3">
              <a href="https://www.instagram.com/qkc.studios/">Instagram</a>
              <a href="https://www.linkedin.com/company/qkc-studios/">
                LinkedIn
              </a>
              <a href="https://www.facebook.com/qkc.studios/">Facebook</a>
              <a href="https://twitter.com/qkc_studios">Twitter</a>
              <a href="https://github.com/qkc-studios">GitHub</a>
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
