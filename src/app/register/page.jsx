"use client";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { createUser, loading } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setError("");
      const user = await createUser(form.name, form.email, form.password);
      console.log("User Created Successfully", user);
      toast.success("User Created Successfully", {
        duration: 2000,
        position: "top-center",
      });
      router.push("/login");
      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        duration: 2000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-md w-full bg-white border border-gray-200 shadow-xl rounded-3xl p-10 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Join us today — it’s free and easy!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-center text-rose-600 font-medium">
              {error}
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full cursor-pointer shadow-sm text-white ${
                loading
                  ? "bg-rose-300 cursor-not-allowed"
                  : "bg-rose-500 hover:bg-rose-600"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition`}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-rose-500 hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
