"use client";
import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { user, signOutUser } = useContext(AuthContext);

  const navItems = [
    { name: "Discover", href: "#discover" },
    { name: "Destination", href: "#destination" },
    { name: "Trip Plan", href: "#trip-plan" },
    { name: "About Us", href: "aboutus" },
  ];

  const handleLogout = async () => {
    try {
      await signOutUser();
      toast.success("Logged out successfully", {
        duration: 2000,
        position: "top-center",
      });
    } catch (error) {
      toast.error("Failed to logout", {
        duration: 2000,
        position: "top-center",
      });
    } finally {
      setShowConfirm(false);
    }
  };

  const shortName = user?.displayName ? user.displayName.slice(0, 10) : "User";

  return (
    <>
      <header className="absolute top-12 left-1/2 transform -translate-x-1/2 max-w-6xl w-full bg-white shadow-lg rounded-full z-50 px-6 py-3 flex flex-col">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-rose-500">
            Trivella
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-rose-500 hover:text-pink-600 transition"
              >
                {item.name}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">{shortName}</span>
                <button
                  onClick={() => setShowConfirm(true)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-rose-500 text-white px-4 py-2 rounded-full font-medium hover:bg-rose-600 transition"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 mt-3 rounded-b-3xl shadow-md">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-rose-500 transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {user ? (
                <div className="flex flex-col items-start gap-2 mt-2">
                  <span className="text-gray-700 font-medium">{shortName}</span>
                  <button
                    onClick={() => {
                      setShowConfirm(true);
                      setIsOpen(false);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition w-full text-center"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-pink-700 transition mt-3"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* 🔐 Logout Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-md space-y-4 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
