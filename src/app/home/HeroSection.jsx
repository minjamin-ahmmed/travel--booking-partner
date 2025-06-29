import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-11/12 mx-auto h-screen rounded-2xl overflow-hidden">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/hero.png"
          alt="Hero Section"
          fill
          className="object-cover brightness-110"
          priority
        />
      </div>

      {/* Add padding top equal to navbar height */}
      <div className="relative z-10 pt-24 px-4 text-white max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore The World With Trivella
        </h1>
        <p className="text-lg md:text-xl font-light">
          Find the best destinations, flights, and experiences.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
