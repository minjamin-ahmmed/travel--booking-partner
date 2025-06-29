import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-rose-500 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Trivella</h2>
          <p className="text-sm text-indigo-100">
            Explore the world with ease. Plan, book, and experience seamless
            travel with Trivella.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              <Link href="#discover" className="hover:underline">
                Discover
              </Link>
            </li>
            <li>
              <Link href="#destination" className="hover:underline">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="#trip-plan" className="hover:underline">
                Trip Plan
              </Link>
            </li>
            <li>
              <Link href="aboutus" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-white space-y-2">
            <li>Email: hello@trivella.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white text-center py-4 text-sm text-white">
        © {new Date().getFullYear()} Trivella. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
