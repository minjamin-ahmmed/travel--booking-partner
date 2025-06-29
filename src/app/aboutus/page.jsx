"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 mt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-500 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          About Trivella
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl font-medium">
          Where every journey begins with a click and ends with unforgettable
          memories.
        </p>
      </section>

      {/* Company Mission */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-rose-500">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Trivella, our mission is to simplify global travel by offering
          seamless, affordable, and personalized booking experiences. We believe
          travel should be accessible to everyone—and we’re here to make that
          happen through innovation and heart.
        </p>
      </section>

      {/* Values */}
      <section className="bg-rose-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center">
          {[
            {
              title: "Transparency",
              desc: "No hidden fees, no surprises. Just clear, honest service every step of the way.",
            },
            {
              title: "Innovation",
              desc: "We stay ahead by building smarter tools to plan, book, and enjoy your travel.",
            },
            {
              title: "Trust",
              desc: "Your peace of mind matters. We partner only with verified providers and secure platforms.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-rose-500 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Teaser */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-rose-500 mb-6">Meet Our Team</h2>
        <p className="text-gray-600 text-lg mb-6">
          We’re a small team of passionate designers, developers, and travelers
          building the future of online travel.
        </p>
        <div className="flex justify-center">
          <Image
            src="/slider3.jpg"
            alt="Team"
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
