"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const packages = [
  {
    id: 1,
    title: "Bali, Indonesia",
    duration: "3 Days 2 Nights",
    imageUrl: "/slider1.jpg",
  },
  {
    id: 2,
    title: "Paris, France",
    duration: "5 Days 4 Nights",
    imageUrl: "/slider2.jpg",
  },
  {
    id: 3,
    title: "Tokyo, Japan",
    duration: "7 Days 6 Nights",
    imageUrl: "/slider3.jpg",
  },
  {
    id: 4,
    title: "Sydney, Australia",
    duration: "4 Days 3 Nights",
    imageUrl: "/slider4.jpg",
  },
  {
    id: 5,
    title: "New York, USA",
    duration: "6 Days 5 Nights",
    imageUrl: "/slider5.jpg",
  },
  {
    id: 6,
    title: "Rome, Italy",
    duration: "5 Days 4 Nights",
    imageUrl: "/slider6.jpg",
  },
];

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 z-10 transform -translate-y-1/2 cursor-pointer p-2 hover:bg-rose-600 rounded-full shadow bg-rose-500 text-white   transition"
  >
    <ChevronRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-[-20px] top-1/2 z-10 transform -translate-y-1/2 cursor-pointer p-2 hover:bg-rose-600 rounded-full shadow bg-rose-500 text-white   transition"
  >
    <ChevronLeft size={24} />
  </div>
);

const PopularPackage = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto py-10 px-4 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-rose-500">
        Popular Packages
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Discover our most popular travel packages
      </p>

      <Slider {...settings}>
        {packages.map(({ id, title, duration, imageUrl }) => (
          <div
            key={id}
            className="relative rounded-xl overflow-hidden mx-2 px-4"
          >
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover rounded-xl"
                priority={id === 1}
              />
            </div>

            <div className="absolute bottom-4 left-8 bg-white/50 text-black rounded-md px-4 py-2 max-w-xs">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm">{duration}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularPackage;
