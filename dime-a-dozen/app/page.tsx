import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart shopping starts here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the power of
              <span className="text-primary"> Dime A Dozen</span>
            </h1>
            <p className="mt-6">
              Your premier destination for price tracking and comparison! Our
              mission is to empower consumers with real-time pricing
              information, helping you make informed decisions and save money on
              your favorite products. With our user-friendly interface and
              cutting-edge technology, you can effortlessly monitor price
              fluctuations, set price alerts, and discover the best deals
              online. Start tracking prices today and unlock the secrets to
              smarter shopping
            </p>

            <Searchbar />
          </div>
          <p>HeroCarousel</p>
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["iPhone", "Book", "Sneakers"].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
